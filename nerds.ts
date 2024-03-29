
enum NNote {
    //% block="C4"
    //% block.loc.ja="ド"
    c4,
    //% block="C#4"
    //% block.loc.ja="ド#"
    cs4,
    //% block="D4"
    //% block.loc.ja="レ"
    d4,
    //% block="D#4"
    //% block.loc.ja="レ#"
    ds4,
    //% block="E4"
    //% block.loc.ja="ミ"
    e4,
    //% block="F4"
    //% block.loc.ja="ファ"
    f4,
    //% block="F#4"
    //% block.loc.ja="ファ#"
    fs4,
    //% block="G4"
    //% block.loc.ja="ソ"
    g4,
    //% block="G#4"
    //% block.loc.ja="ソ#"
    gs4,
    //% block="A4"
    //% block.loc.ja="ラ"
    a4,
    //% block="A#4"
    //% block.loc.ja="ラ#"
    as4,
    //% block="B4"
    //% block.loc.ja="シ"
    b4,

    //% block="C3"
    //% block.loc.ja="ド3"
    c3,
    //% block="C#3"
    //% block.loc.ja="ド#3"
    cs3,
    //% block="D3"
    //% block.loc.ja="レ3"
    d3,
    //% block="D#3"
    //% block.loc.ja="レ#3"
    ds3,
    //% block="E3"
    //% block.loc.ja="ミ3"
    e3,
    //% block="F3"
    //% block.loc.ja="ファ3"
    f3,
    //% block="F#3"
    //% block.loc.ja="ファ#3"
    fs3,
    //% block="G3"
    //% block.loc.ja="ソ3"
    g3,
    //% block="G#3"
    //% block.loc.ja="ソ#3"
    gs3,
    //% block="A3"
    //% block.loc.ja="ラ3"
    a3,
    //% block="A#3"
    //% block.loc.ja="ラ#3"
    as3,
    //% block="B3"
    //% block.loc.ja="シ3"
    b3,

    //% block="C5"
    //% block.loc.ja="ド5"
    c5,
    //% block="C#5"
    //% block.loc.ja="ド#5"
    cs5,
    //% block="D5"
    //% block.loc.ja="レ5"
    d5,
    //% block="D#5"
    //% block.loc.ja="レ#5"
    ds5,
    //% block="E5"
    //% block.loc.ja="ミ5"
    e5,
    //% block="F5"
    //% block.loc.ja="ファ5"
    f5,
    //% block="F#5"
    //% block.loc.ja="ファ#5"
    fs5,
    //% block="G5"
    //% block.loc.ja="ソ5"
    g5,
    //% block="G#5"
    //% block.loc.ja="ソ#5"
    gs5,
    //% block="A5"
    //% block.loc.ja="ラ5"
    a5,
    //% block="A#5"
    //% block.loc.ja="ラ#5"
    as5,
    //% block="B5"
    //% block.loc.ja="シ5"
    b5,

}


//% block="Nerds"
//% block.loc.ja="おたく"
//% weight=10
//% color=#696969
//% icon="\uf164"
namespace nerds {



    // ----- Button

    //% block="on button $button $action"
    //% block.loc.ja="ボタン $button が $action とき"
    //% weight=200
    //% subcategory="button"
    export function onButton(button: Button, action: TouchButtonEvent, handler: () => void) {
        control.onEvent(button, action, handler)
    }



    // ----- Event

    //% block="on event from $id with value$val"
    //% block.loc.ja="イベントが届いたとき 発生源$id 値$val"
    //% weight=200
    //% subcategory="event"
    export function eventHandler(id: number, val: number, handler: () => void) {
        control.onEvent(id, val, handler)
    }

    //% block="raise event from source$id with value$val"
    //% block.loc.ja="イベントを発生させる 発生源$id 値$val"
    //% weight=100
    //% subcategory="event"
    export function eventFire(id: number, val: number) {
        control.raiseEvent(id, val)
    }

    //% block="event timestamp(uSec)"
    //% block.loc.ja="イベントのタイムスタンプ（μ秒）"
    //% weight=50
    //% subcategory="event"
    export function eventTimestamp() {
        return control.eventTimestamp()
    }

    //% block="event value"
    //% block.loc.ja="イベントの値"
    //% weight=40
    //% subcategory="event"
    export function eventValue() {
        return control.eventValue()
    }



    // ----- I2C

    //% block="i2c read number at address $address of format $format repeated $repeat"
    //% block.loc.ja="I2C 値を読み込む アドレス$address フォーマット$format 繰り返し$repeat"
    //% weight=200
    //% subcategory="serial"
    //% group="I2C"
    export function i2cReadNumber(address: number, format: NumberFormat, repeat: boolean) {
        return pins.i2cReadNumber(address, format, repeat)
    }

    //% block="i2c write number at address $address with value $value of format $format repeated $repeat"
    //% block.loc.ja="I2C 値を書き出す | アドレス$address 値$value フォーマット$format 繰り返し$repeat"
    //% weight=100
    //% subcategory="serial"
    //% group="I2C"
    export function i2cWriteNumber(address: number, value: number, format: NumberFormat, repeat: boolean) {
        pins.i2cWriteNumber(address, value, format, repeat)
    }



    // ----- SPI

    //% block="spi set pins MOSI$mosi MISO$miso SCK$sck"
    //% block.loc.ja="SPI 端子を決める MOSI$mosi MISO$miso SCK$sck"
    //% weight=200
    //% subcategory="serial"
    //% group="SPI"
    export function spiPins(mosi: DigitalPin, miso: DigitalPin, sck: DigitalPin) {
        pins.spiPins(mosi, miso, sck)
    }

    //% block="spi format bits$bit mode$mode"
    //% block.loc.ja="SPI 形式を設定する ビット数$bit モード$mode"
    //% weight=190
    //% subcategory="serial"
    //% group="SPI"
    export function spiFormat(bit: number, mode: number) {
        pins.spiFormat(bit, mode)
    }

    //% block="spi frequency$f"
    //% block.loc.ja="SPI 周波数を設定する（Hz） $f"
    //% weight=180
    //% subcategory="serial"
    //% group="SPI"
    export function spiFrequency(f: number) {
        pins.spiFrequency(f)
    }

    //% block="spi write $value"
    //% block.loc.ja="SPI 書き出す $value"
    //% weight=170
    //% subcategory="serial"
    //% group="SPI"
    export function spiWrite(value: number) {
        return pins.spiWrite(value)
    }






    // ----- Melody

    //% block="play note array $noteArray | repeating $options"
    //% block.loc.ja="音符配列を鳴らす $noteArray | 繰り返し $options"
    //% weight=200
    //% subcategory="melody"
    //% group=""
    export function playNoteArray(noteArray: string[], options: MelodyOptions) {
        music.startMelody(noteArray, options)
    }

    //% block="make note array from string $notesString"
    //% block.loc.ja="文字列から音符配列を作る $notesString"
    //% weight=210
    //% subcategory="melody"
    //% group=""
    //% notesString.defl="C4:4,D4:4,E4:4"
    export function stringToNoteArray(notesString: string) {
        if (notesString.length <= 0) return []

        let octave = 4
        let duration = 4
        let currentOctave = octave
        let currentDuration = duration


        let melody: string[] = []

        let cmd = notesString.toLowerCase().split(",")
        for (let i = 0; i < cmd.length; i++) {
            let note = cmd[i]
            let index = 0
            let out = ""

            if (!(note[index] >= "a" && note[index] <= "g" || note[index] == "r")) continue

            out += note[index]
            index++

            if (note[index] == "#") {
                out += note[index]
                index++
            }

            let args = note.substr(index, note.length - index)
            if (args.length <= 0) {
                octave = currentOctave
                duration = currentDuration
            }
            else {
                if (args.includes(":")) {
                    let arg = args.split(":")
                    octave = parseInt(arg[0])
                    if (Number.isNaN(octave)) octave = currentOctave
                    duration = parseInt(arg[1])
                    if (Number.isNaN(duration)) duration = currentDuration
                }
                else {
                    octave = parseInt(args)


                    if (Number.isNaN(octave)) octave = currentOctave
                    duration = currentDuration
                }
            }

            out += octave + ":" + duration

            // basic.showString(out)

            if (currentOctave != octave) currentOctave = octave
            if (currentDuration != duration) currentDuration = duration



            melody.push(out);
        }

        return melody
    }

    //% block="$note : $duration"
    //% block.loc.ja="$note : $duration"
    //% note.fieldEditor="gridpicker"
    //% note.fieldOptions.width=220
    //% note.fieldOptions.columns=12
    //% duration.defl=4
    //% duration.min=1
    //% duration.max=32
    //% weight=250
    //% subcategory="melody"
    //% group=""
    export function getNoteCode(note: NNote, duration: number) {
        let code = ""
        switch (note) {
            case NNote.c4: code = "c4"; break
            case NNote.cs4: code = "c#4"; break
            case NNote.d4: code = "d4"; break
            case NNote.ds4: code = "d#4"; break
            case NNote.e4: code = "e4"; break
            case NNote.f4: code = "f4"; break
            case NNote.fs4: code = "f#4"; break
            case NNote.g4: code = "g4"; break
            case NNote.gs4: code = "g#4"; break
            case NNote.a4: code = "a4"; break
            case NNote.as4: code = "a#4"; break
            case NNote.b4: code = "b4"; break
            case NNote.c3: code = "c3"; break
            case NNote.cs3: code = "c#3"; break
            case NNote.d3: code = "d3"; break
            case NNote.ds3: code = "d#3"; break
            case NNote.e3: code = "e3"; break
            case NNote.f3: code = "f3"; break
            case NNote.fs3: code = "f#3"; break
            case NNote.g3: code = "g3"; break
            case NNote.gs3: code = "g#3"; break
            case NNote.a3: code = "a3"; break
            case NNote.as3: code = "a#3"; break
            case NNote.b3: code = "b3"; break
            case NNote.c5: code = "c5"; break
            case NNote.cs5: code = "c#5"; break
            case NNote.d5: code = "d5"; break
            case NNote.ds5: code = "d#5"; break
            case NNote.e5: code = "e5"; break
            case NNote.f5: code = "f5"; break
            case NNote.fs5: code = "f#5"; break
            case NNote.g5: code = "g5"; break
            case NNote.gs5: code = "g#5"; break
            case NNote.a5: code = "a5"; break
            case NNote.as5: code = "a#5"; break
            case NNote.b5: code = "b5"; break
            default:
        }
        return code + ":" + duration
    }












}
