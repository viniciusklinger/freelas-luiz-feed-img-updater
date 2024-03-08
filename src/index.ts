import Jimp from "jimp";

async function main() {
    try {
        const img = await Jimp.read("/home/klinger/Workspace/freelas/luiz/feed-img-updater/src/frasson.png");
        const font = await Jimp.loadFont(Jimp.FONT_SANS_14_BLACK);

        img.print(
            font,
            0,
            0,
            {
                text: "Teste de texto que sera escrito na imagem",
                alignmentX: Jimp.HORIZONTAL_ALIGN_RIGHT,
                alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
            },
            200
        );

        const res = img.writeAsync(`/home/klinger/Workspace/freelas/luiz/feed-img-updater/src/${new Date().getTime()}.png`);

        console.log('Finito!')

    } catch (e) {
        console.log('Error: ', e)
    }
}

main()