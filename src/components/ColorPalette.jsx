import { useCanvas } from "../context/CanvasContext";

const ColorPalette = () => {
    const { setColor } = useCanvas();

    const colors = [
        { name: 'black', hex: '000000' },
        { name: 'white', hex: 'ffffff' },
        { name: 'red', hex: 'ff0000' },
        { name: 'yellow', hex: 'ffff00' },
        { name: 'green', hex: '008000' },
        { name: 'orange', hex: 'ffa500' },
        { name: 'pink', hex: 'ffc0cb' },
        { name: 'slate', hex: '708090' },
        { name: 'sky blur', hex: '00ccff' },
        { name: 'dark blue', hex: '0000cc' },
        { name: 'lime', hex: '00ff00' },
        { name: 'purple', hex: '800080' },
        { name: 'violet', hex: '8a2be2' },
        { name: 'indigo', hex: '4b0082' },
        { name: 'blue', hex: '0000ff' },
        { name: 'cyan', hex: '00ffff' },
        { name: 'magenta', hex: 'ff00ff' },
        { name: 'gold', hex: 'ffd700' },
        { name: 'silver', hex: 'c0c0c0' },
        { name: 'grey', hex: '808080' },
        { name: 'maroon', hex: '800000' },
        { name: 'olive', hex: '808000' },
        { name: 'navy', hex: '000080' },
        { name: 'teal', hex: '008080' },
        { name: 'aqua', hex: '00ffff' },
        { name: 'fuchsia', hex: 'ff00ff' },
        { name: 'lime', hex: '00ff00' },
        { name: 'dark green', hex: '006400' },
        { name: 'dark red', hex: '8b0000' },
        { name: 'dark yellow', hex: '808000' },
    ];

    return (
        <>
            <div className="flex flex-wrap w-full">
                {colors.map((color, index) => (
                    <div
                        style={{ backgroundColor: `#${color.hex}` }}
                        className="w-5 h-5"
                        key={index}
                        onClick={() => setColor(color.hex)}
                    />
                ))}
            </div>
        </>
    );
};

export default ColorPalette;
