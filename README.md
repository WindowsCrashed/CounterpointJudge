# 🎼 ONLINE COUNTERPOINT JUDGE 🎼

A web app that analyses and judges your Species Counterpoint exercises, according to the rules established in Fux's _Gradus ad Parnassum_.

In its current state, it's only capable of analysing First Species counterpoint in two voices, but could definitely have its capabilities expanded in future updates.

It's composed of _three main parts_:

-   An [**Evaluator algorithm**](#subsection-1)
-   An [**Express API**](#subsection-2)
-   A [**React Client**](#subsection-3)

## Evaluator

[Click to go to directory](server/src/counterpoint-judge/)

It's the core of the application, the algorithm behind the analysis. It may be used as a standalone tool, and implemented in any programming language, but here, for consistence, it's in TypeScript.
As an input, the Evaluator takes a _mode_, a string, and a _sequence_, an array of arrays of numbers. Each number is equivalent to a note in MIDI code ([check out the complete list of MIDI codes here](https://homes.luddy.indiana.edu/donbyrd/Teach/MusicalPitchesTable.htm)), and each array to a pair of notes, the lower voice and the upper voice.
After an analysis of _harmonic intervals_, _melodic intervals_, _motion_ and _mode_, the algorithm returns some _feedback_ to the user, containing a _score_, a _list of mistakes_ and some data telling _where the mistakes are in the score_.
You may use the data returned by the Evaluator however you'd like, but here I've decided to send it to a front-end client, which serves as an interface for the app. In order to do so, I needed an API.

## API

[Click to go to directory](/server/src/api/)

A basic Express API with some REST principles.
It only has one route, a _POST_ to the URL `http://localhost:3001/counterpoint-judge`. It takes a body containing a set of MIDI _tracks_, as a numeric array like in the Evaluator, and the _mode_. The _tracks_, however, should be inverted, which means the first number is the top voice and the second one the lower voice. That's due to the way the client reads the MIDI files which will then be passed to the API. Changes can be made depending on your situation. In the response, the _feedback_ will be sent to the client, in a JSON file.
As with the Evaluator, the API may be used independently of the React client, but of course needs the Evaluator in order to work.

## Client

[Click to go to directory](/client/)

A front-end which serves as the interface to the Evaluator. Built with React, with Tailwind CSS for styling, along some other packages for extra effects. For the sheet music, I used the VexFlow library.
As an input, you should insert a MIDI file containing exactly 2 tracks, each with an equal amount of notes. You may then choose the _mode_ and the _voices_ of each track. After click on _JUDGE COUNTERPOINT_, the file will be converted into the appropriate JSON file for the API and sent to the server. Once the analysis is done, the _feedback_ will be displayed in a friendly way.
The client is not responsive, and lacks lots of modern features, which can be added in future updates.

# Specific Details

## Mode

-   D
-   E
-   F
-   G
-   A
-   C

## Voices

-   Soprano (Treble clef)
-   Alto (Treble clef)
-   Tenor (Tenor clef)
-   Bass (Bass clef)

## Tracks

**Note range**: A0 (21) to C8 (108)

**Requirements**:

-   Exactly 2 tracks
-   Same number of notes in both tracks
-   If possible, keep all the notes the same value

## Rule System

Based entirely on the rules established in the _Dialogue_ and _Chapter One_ of Johann Joseph Fux's _Gradus ad Parnassum_. The version used for this project was Alfred Mann's. Some very situation specific rules (namely from page 39) were not included, though.

## Mistakes

**Priority/Weight**:

-   0.5 = `#eab308`
-   1.0 = `#f97316`
-   1.5 = `#dc2626`

**Mistake types**:

-   FIRST INTERVAL MUST BE A PERFECT CONSONANCE (1.5)
-   DISSONANCE (1.0)
-   TRITONE (1.5)
-   PARALLEL FIFTHS (1.5)
-   PARALLEL UNISON (1.5)
-   PARALLEL OCTAVES (1.5)
-   BATTUTA (0.5)
-   PENULTIMATE INTERVAL MUST BE EITHER MAJOR SIXTH OR MINOR THIRD (1.5)
-   LAST INTERVAL MUST BE A PERFECT CONSONANCE (1.5)
-   INTERVAL BIGGER THAN AN OCTAVE (1.5)
-   MAJOR SIXTH INTERVAL (1.0)
-   SEVENTH INTERVAL (1.0)
-   DIRECT PERFECT CONSONANCE (1.5)
-   INCORRECT MODE BEGINNING (1.5)
-   INCORRECT MODE TERMINATION (1.5)
