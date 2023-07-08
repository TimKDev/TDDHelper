export const RulesConfig = {
  red: {
    target: "Schreibe Testcode der nachweisen soll, dass der Produktionscode einen Teil des Problems erfolgreich löst oder um das Problem besser zu erkunden. Dieser Testcode definiert um was es in diesem Zykel geht.",
    rules: {
      low: [
        "Es darf nur genauso viel Testcode geschrieben werden, wie nötig ist, damit der Testcode fehl schlägt und nicht mehr. (Kompilierungsfehler zählen als Fehler). Danach muss sofort in den Green State gegangen werden! ",
        "Jeder Testcode muss mindestens einmal aus den richtigen Gründen fehlschlagen (NotImplementedException zählt z.B. nicht!). D.h. dass man auch in diesem Schritt Produktionscode schreiben darf, um zu garantieren, dass der Code aus den richtigen Gründen fehllschlägt.",
        "Falls möglich verwende das OneToMany Pattern. D.h. wenn das Problem für eine Collection von Items gelösst werden sollte, schreibe zunächst einen Test der das Problem für ein einzelnes Item löst. Erst wenn ein solcher Test durch einen kompletten Zykel durchlaufen hat, darf der Test durch einen Test für eine Collection ersetzt werden."
      ],
      medium: [
        "Schreibe einen fehschlagenden kompletten Test mit mehreren Testcases oder weniger, um in den Green State zu kommen.",
        "Jeder Testcode muss mindestens einmal aus den richtigen Gründen fehlschlagen (NotImplementedException zählt z.B. nicht!). D.h. dass man auch in diesem Schritt Produktionscode schreiben darf, um zu garantieren, dass der Code aus den richtigen Gründen fehllschlägt.",
      ],
      high: [
        "Schreibe mehrere komplette Tests mit mehreren Testcases oder weniger, um in den Green State zu kommen.",
        "Jeder Testcode muss mindestens einmal aus den richtigen Gründen fehlschlagen (NotImplementedException zählt z.B. nicht!). D.h. dass man auch in diesem Schritt Produktionscode schreiben darf, um zu garantieren, dass der Code aus den richtigen Gründen fehllschlägt.",
      ],
    },
    tips: {
      low: [
        "Vereinfache schwierige Probleme, indem du zunächst versuchst eine stark vereinfachte Version des Problems zu lösen und dann in jedem Schritt etwas mehr Komplexität des Problems dazuzunehmen bis man das ganze Problem gelöst hat. Man muss nicht sofort das ganze Problem lösen!",
        "Lasse dich nicht durch Details wie gutes Naming oder andere Refactoring Aufgaben ablenken. Diese dürfen erst im Refactoring Step angewendet werden. Versuche immer möglichst schnell in den nächsten State zu kommen und die Zykelzeit möglichst kurz zu halten.",
        "Tests sollten nicht keine externen Abhängigkeiten haben bzw. nicht von der Umgebung abhängen in der der Test läuft. => Der Test muss im Arrange Step alle Abhängigkeiten und Daten selbst erzeugen, die der Test benötigt und die Reihenfolge der Testausführungen muss irrelevant sein.",
        "Tests sollten wiederholbar und deterministisch sein.",
        "Tests sollten möglichst alle möglichen UseCases abdecken. Denke an Randfälle und Spezialfälle wie null, 0 oder ''. 100% Codecoverage reicht nicht, es müssen auch alle UseCases möglichst gut abgedeckt werden!",
      ],
      medium: [
        "Vereinfache schwierige Probleme, indem du zunächst versuchst eine stark vereinfachte Version des Problems zu lösen und dann in jedem Schritt etwas mehr Komplexität des Problems dazuzunehmen bis man das ganze Problem gelöst hat. Man muss nicht sofort das ganze Problem lösen!",
        "Lasse dich nicht durch Details wie gutes Naming oder andere Refactoring Aufgaben ablenken. Diese dürfen erst im Refactoring Step angewendet werden. In diesem Step geht es nur darum Testcode zu schreiben der aus den richtigen Gründen fehlschlägt.",
        "Tests sollten nicht keine externen Abhängigkeiten haben bzw. nicht von der Umgebung abhängen in der der Test läuft. => Der Test muss im Arrange Step alle Abhängigkeiten und Daten selbst erzeugen, die der Test benötigt und die Reihenfolge der Testausführungen muss irrelevant sein.",
        "Tests sollten wiederholbar und deterministisch sein.",
        "Tests sollten möglichst alle möglichen UseCases abdecken. Denke an Randfälle und Spezialfälle wie null, 0 oder ''. 100% Codecoverage reicht nicht, es müssen auch alle UseCases möglichst gut abgedeckt werden!"
      ],
      high: [
        "Vereinfache schwierige Probleme, indem du zunächst versuchst eine stark vereinfachte Version des Problems zu lösen und dann in jedem Schritt etwas mehr Komplexität des Problems dazuzunehmen bis man das ganze Problem gelöst hat. Man muss nicht sofort das ganze Problem lösen!",
        "Lasse dich nicht durch Details wie gutes Naming oder andere Refactoring Aufgaben ablenken. Diese dürfen erst im Refactoring Step angewendet werden. In diesem Step geht es nur darum Testcode zu schreiben der aus den richtigen Gründen fehlschlägt.",
        "Tests sollten nicht keine externen Abhängigkeiten haben bzw. nicht von der Umgebung abhängen in der der Test läuft. => Der Test muss im Arrange Step alle Abhängigkeiten und Daten selbst erzeugen, die der Test benötigt und die Reihenfolge der Testausführungen muss irrelevant sein.",
        "Tests sollten wiederholbar und deterministisch sein.",
        "Tests sollten möglichst alle möglichen UseCases abdecken. Denke an Randfälle und Spezialfälle wie null, 0 oder ''. 100% Codecoverage reicht nicht, es müssen auch alle UseCases möglichst gut abgedeckt werden!"
      ],
    }
  },
  green: {
    target: "Schreibe Produktionscode um alle Tests zu erfüllen.",
    rules: {
      low: [
        "Es darf nur exakt so viel Produktions Code geschrieben werden wie nötig ist, um alle Tests zu erfüllen. Danach muss man sofort in den Refactoring State gehen.",
        "Es darf keine Obvious Implementierung für Code geschrieben werden, sondern es muss mit Triangulation gearbeitet werden.",
        "Falls möglich muss das OneToMany Pattern verwendet werden.",
        "Produktions Code sollten niemals dieselbe Implementierung wie der Test haben. Falls man keine Umformulierung finden kann, verwende lieber hard coded Werte im Test als dieselbe Logik wie im Produktionscode zu verwenden.",
      ],
      medium: [
        "Wenn die Implementierung für ein Problem offensichtlich ist, verwende sie um alle Test zum bestehen zu bringen.",
        "Produktions Code sollten niemals dieselbe Implementierung wie der Test haben. Falls man keine Umformulierung finden kann, verwende lieber hard coded Werte im Test als dieselbe Logik wie im Produktionscode zu verwenden.",
      ],
      high: [
        "Wenn die Implementierung für ein Problem offensichtlich ist, verwende sie um alle Test zum bestehen zu bringen.",
        "Produktions Code sollten niemals dieselbe Implementierung wie der Test haben. Falls man keine Umformulierung finden kann, verwende lieber hard coded Werte im Test als dieselbe Logik wie im Produktionscode zu verwenden.",
      ],
    },
    tips: {
      low: [
        "Lasse dich nicht durch Details wie gutes Naming, Klassen verschieben, richtige Methodensignaturen oder andere Refactoring Aufgaben ablenken. Diese dürfen erst im Refactoring Step angewendet werden. In diesem Step geht es nur mit möglichst wenig Code alle Tests zu bestehen.",
      ],
      medium: [
        "Lasse dich nicht durch Details wie gutes Naming, Klassen verschieben, richtige Methodensignaturen oder andere Refactoring Aufgaben ablenken. Diese dürfen erst im Refactoring Step angewendet werden. In diesem Step geht es nur mit möglichst wenig Code alle Tests zu bestehen.",
      ],
      high: [
        "Lasse dich nicht durch Details wie gutes Naming, Klassen verschieben, richtige Methodensignaturen oder andere Refactoring Aufgaben ablenken. Diese dürfen erst im Refactoring Step angewendet werden. In diesem Step geht es nur mit möglichst wenig Code alle Tests zu bestehen.",
      ],
    }
  },
  refactor: {
    target: "Verbessere das Design des Produktions- und Testcodes.",
    rules: {
      low: [
        "Der Zykel kann erst beendet werden, wenn alle Tests nach dem Refactoring immer noch bestanden sind.",
        "Code muss 3 mal dupliziert werden bevor er abstrahiert werden muss.",
        "Falls man beim Refactorn irgendwelche Änderungen an Tests macht, sollte man danach nochmal überprüfen, ob die Tests immer noch fehlschlagen, wenn man den korrespondierenden Produktionscode fehlerhaft verändert.",
      ],
      medium: [
        "Der Zykel kann erst beendet werden, wenn alle Tests nach dem Refactoring immer noch bestanden sind.",
        "Falls man beim Refactorn irgendwelche Änderungen an Tests macht, sollte man danach nochmal überprüfen, ob die Tests immer noch fehlschlagen, wenn man den korrespondierenden Produktionscode fehlerhaft verändert.",
      ],
      high: [
        "Der Zykel kann erst beendet werden, wenn alle Tests nach dem Refactoring immer noch bestanden sind.",
        "Falls man beim Refactorn irgendwelche Änderungen an Tests macht, sollte man danach nochmal überprüfen, ob die Tests immer noch fehlschlagen, wenn man den korrespondierenden Produktionscode fehlerhaft verändert.",
      ],
    },
    tips: {
      low: [
        "Beachte die S.O.L.I.D Prinzipien. Besonders sollte darauf geachtet werden, dass jede Klasse und Methode genau einen Grund hat sich zu verändern.",
        "Wenn man OneToMany verwendet, und dafür auch die API einer Klasse verändern muss (z.B. Customer zu Customer[] ändern), kann man erstmal einen weiteren Overload für die Methode mit der geänderten API definieren und die alte API temporär behalten",
        "Verwende nicht zu viele Testcases an einem Test, sondern schreibe lieber mehrere Tests mit genau definierten Zuständigkeiten.  Nicht jeder Test muss jeden Aspekt der getesteten Methode überprüfen. Man sollte Tests lieber auf einzelne Aspekt des Problems beschränken!",
        "Testklassen verschachteln weil die Namen zu lang werden",
        "Refactore den Testcode so, dass Abhängigkeiten von den internen Details des Produktionscodes möglichst abstrahiert werden. Z.B. sollte die direkte Verwendung Konstruktors einer Klasse oder das Erstellen eines Mocks lieber durch private Factory Methoden gekapselt werden.",
        "Mache dir jetzt Gedanken um sinnvolle Namen, der Position von Klassen und richtigen Methodensignaturen oder der Einführung von Enums oder neuen Klassen und Methoden. Beachte dass der nicht alles beim ersten Refactoring perfekt gemacht werden muss. Namen können z.B. später noch überarbeitet werden."
      ],
      medium: [
        "Beachte die S.O.L.I.D Prinzipien. Besonders sollte darauf geachtet werden, dass jede Klasse und Methode genau einen Grund hat sich zu verändern.",
        "Wenn man OneToMany verwendet, und dafür auch die API einer Klasse verändern muss (z.B. Customer zu Customer[] ändern), kann man erstmal einen weiteren Overload für die Methode mit der geänderten API definieren und die alte API temporär behalten",
        "Verwende nicht zu viele Testcases an einem Test, sondern schreibe lieber mehrere Tests mit genau definierten Zuständigkeiten.  Nicht jeder Test muss jeden Aspekt der getesteten Methode überprüfen. Man sollte Tests lieber auf einzelne Aspekt des Problems beschränken!",
        "Testklassen verschachteln weil die Namen zu lang werden",
        "Refactore den Testcode so, dass Abhängigkeiten von den internen Details des Produktionscodes möglichst abstrahiert werden. Z.B. sollte die direkte Verwendung Konstruktors einer Klasse oder das Erstellen eines Mocks lieber durch private Factory Methoden gekapselt werden.",
        "Mache dir jetzt Gedanken um sinnvolle Namen, der Position von Klassen und richtigen Methodensignaturen oder der Einführung von Enums oder neuen Klassen und Methoden. Beachte dass der nicht alles beim ersten Refactoring perfekt gemacht werden muss. Namen können z.B. später noch überarbeitet werden."
      ],
      high: [
        "Beachte die S.O.L.I.D Prinzipien. Besonders sollte darauf geachtet werden, dass jede Klasse und Methode genau einen Grund hat sich zu verändern.",
        "Wenn man OneToMany verwendet, und dafür auch die API einer Klasse verändern muss (z.B. Customer zu Customer[] ändern), kann man erstmal einen weiteren Overload für die Methode mit der geänderten API definieren und die alte API temporär behalten",
        "Verwende nicht zu viele Testcases an einem Test, sondern schreibe lieber mehrere Tests mit genau definierten Zuständigkeiten.  Nicht jeder Test muss jeden Aspekt der getesteten Methode überprüfen. Man sollte Tests lieber auf einzelne Aspekt des Problems beschränken!",
        "Testklassen verschachteln weil die Namen zu lang werden",
        "Refactore den Testcode so, dass Abhängigkeiten von den internen Details des Produktionscodes möglichst abstrahiert werden. Z.B. sollte die direkte Verwendung Konstruktors einer Klasse oder das Erstellen eines Mocks lieber durch private Factory Methoden gekapselt werden.",
        "Mache dir jetzt Gedanken um sinnvolle Namen, der Position von Klassen und richtigen Methodensignaturen oder der Einführung von Enums oder neuen Klassen und Methoden. Beachte dass der nicht alles beim ersten Refactoring perfekt gemacht werden muss. Namen können z.B. später noch überarbeitet werden."
      ],
    }
  }
}; 