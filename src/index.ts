import Jimp from "jimp";

async function main() {
    try {
        const img = await Jimp.read("src/test.png");
        const font = await Jimp.loadFont(Jimp.FONT_SANS_64_BLACK);
        const text = "Teste de texto que sera escrito na imagem";
        const maxWidth = 450;

        const textWidth = Jimp.measureText(font, text);
        const textHeight = Jimp.measureTextHeight(font, text, maxWidth)

        console.log(`width: ${textWidth}\nheight: ${textHeight}`);

        img.print(
            font,
            0,
            0,
            {
                text: text,
                alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
                alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
            },
            maxWidth
        );

        const res = img.writeAsync(`src/${new Date().getTime()}.png`);

        console.log('Finito!')

    } catch (e) {
        console.log('Error: ', e)
    }
}

main()