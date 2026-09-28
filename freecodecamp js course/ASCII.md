### Whats ASCII ? and why it's been created man :

At the hardware and operating system level, there are no letters, no files, and no text—there are only numbers (specifically, binary bits grouped into bytes).

When Windows reads an .exe file, or when JavaScript reads an uploaded file into a buffer, the variable doesn't hold a little picture of a letter like "M" or "Z". It holds raw numbers.

Here is exactly what is inside that variable.

What is Actually in the Buffer Variable?
If you read the first few bytes of a file in JavaScript using an ArrayBuffer or a Uint8Array, your variable is an array of numbers between 0 and 255.

Let's look at what happens when you load a file in JavaScript:

```
// Suppose you read the first 4 bytes of an uploaded file into a buffer:
const buffer = new Uint8Array(fileData);

console.log(buffer);
// What you actually see in the console output looks like this:
// Uint8Array [ 137, 80, 78, 71 ]
```

That variable contains pure numbers.

The Illusion of ASCII (Why We Use Letters)
Computers only understand numbers (137, 80, 78, 71). Humans are terrible at remembering what random numbers mean, but we are great at reading letters.

ASCII is just a translation dictionary created by humans to bridge that gap. It says:

\*\* Hey computer, when your memory holds the number 77, let's agree to display it to humans as the letter "M".

\*\* When memory holds the number 90, let's display it as the letter "Z".

=> So, when a file starts with the bytes 77 and 90:

1. The computer just sees the raw numbers: 77 and 90.

2. A programmer writing the Windows operating system looked up an ASCII chart and said, "Ah, 77 is 'M' and 90 is 'Z'. Let's call this the MZ signature."

3. Because "MZ" is easier for humans to talk about than "77 and 90", we call it a text signature. But under the hood, Windows is literally just checking: if (file[0] === 77 && file[1] === 90).

---

## where can we use this? real world usage ?

##### Real-World Example: Building a Basic File Upload Security Check :

Imagine you are building an image upload feature, and you want to ensure that users are actually uploading real PNG images, not just a malicious .php or .exe file that they renamed to .png.

In computer science, files have "magic numbers"—hidden bytes at the very beginning of the file that declare its true format. For a PNG file, the first 8 bytes of the file always translate to these exact decimal ASCII/byte values: 137, 80, 78, 71, 13, 10, 26, 10 (which spells out the signature bytes).

When a user uploads a file, JavaScript can read the raw data as a buffer. To verify it, you use character codes to inspect those bytes:

```
// Simulating reading the first few bytes of an uploaded file
function isValidPNG(fileBuffer) {
  // The official magic number byte codes for a PNG file
  const pngSignature = [137, 80, 78, 71, 13, 10, 26, 10];

  // Convert the first 8 bytes of the file buffer into their numeric values
  for (let i = 0; i < pngSignature.length; i++) {
    // fileBuffer[i] gives us the raw numeric byte value (ASCII/byte code)
    if (fileBuffer[i] !== pngSignature[i]) {
      return false; // Mismatch! This is NOT a real PNG file.
    }
  }

  return true; // Valid PNG signature found!
}

// --- Test ---
// Let's say a hacker tries to sneak in a fake file renamed to "avatar.png"
const fakeFileBytes = [77, 90, 144, 0, 3, 0, 0, 0]; // These are actually EXE file bytes!

console.log(isValidPNG(fakeFileBytes));
// Output: false (Blocked! The byte codes don't match a PNG)
```

Another Quick Real-World Example: URL Slug Generation or Sanitization
If you are writing a function to clean up user input to create a safe URL (slug), you often check ASCII ranges to strip out illegal symbols without relying on heavy regular expressions:

```
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  // Check if ASCII code falls between A-Z (65-90), a-z (97-122), or 0-9 (48-57)
  return (code >= 48 && code <= 57) ||
         (code >= 65 && code <= 90) ||
         (code >= 97 && code <= 122);
}

console.log(isAlphaNumeric('A')); // true
console.log(isAlphaNumeric('$')); // false (Blocked special character)
```

---

### What are Uint8Array or ArrayBuffer, are they new types in the js?

They are not brand new—they were actually introduced back in 2011 with ECMAScript 5.1 (ES5) as part of the TypedArray specification, but compared to JavaScript's original days, they are relatively modern.

Before them, JavaScript only knew how to handle strings, numbers (which were always 64-bit floats), and objects. It was terrible at handling raw binary data like images, audio, or network packets. ArrayBuffer and Uint8Array were added to fix that.

Here is a quick breakdown of what they are:

ArrayBuffer: A generic, fixed-length block of raw binary data. It’s just a chunk of raw memory sitting there. You can't look at it or change it directly by itself.

Uint8Array (Unsigned Integer 8-bit Array): A view over that ArrayBuffer. It tells JavaScript: "Hey, look at that raw memory chunk, and treat every 8 bits (1 byte) as a regular number between 0 and 255."

Why do we need them?
If you download an image, read a file, or talk to a hardware device over WebSockets, the browser doesn't give you a nice text string—it gives you a stream of raw bytes. ArrayBuffer holds those bytes, and Uint8Array lets your code read and loop through them as numbers (like checking those file magic numbers we talked about).

### so whats the typeof output of these two

Both return "object" when you use the typeof operator.

```
const buffer = new ArrayBuffer(8);
const view = new Uint8Array(buffer);

console.log(typeof buffer); // "object"
console.log(typeof view);   // "object"
```

Why does this happen?
In JavaScript, typeof is only useful for checking basic primitive types (like strings, numbers, booleans, and functions). Almost anything complex—including arrays, plain objects, dates, and binary buffers—is lumped into the generic "object" category.

How to check their real type
To find out what kind of binary object you are actually dealing with, you use instanceof or check the constructor name:

```
console.log(buffer instanceof ArrayBuffer); // true
console.log(view instanceof Uint8Array);    // true

// Or check their constructor name directly:
console.log(buffer.constructor.name);       // "ArrayBuffer"
console.log(view.constructor.name);         // "Uint8Array"
```
