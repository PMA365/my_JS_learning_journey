```
let adjective,noun,verb,place,noun2,adjective2 = "";
```

In JavaScript, writing it this way only assigns "" to the last variable (adjective2). All the other variables (adjective, noun, verb, place, noun2) end up as undefined, which can break the test when it checks your code.

```
let adjective = "kind",
    noun = "Bahador",
    verb = "give",
    place = "House",
    adjective2 = "handsome",
    noun2 = "Artemis";
```

or

```
let adjective = "kind";
let noun = "Bahador";
let verb = "give";
let place = "Persia";
let adjective2 = "handsome";
let noun2 = "Artemis";
```
