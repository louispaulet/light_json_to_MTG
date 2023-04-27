# 🌟 light_json_to_MTG 🌟

Convert your lightweight JSON files into visually appealing Magic: The Gathering (MTG) cards! Easily upload JSON files, view the generated card appearance, and download the card as a JPEG image or the JSON file itself. This project is perfect for MTG enthusiasts who want to create custom cards or visualize their card ideas.

## 🚀 Features

- 📁 Upload a JSON file and generate an MTG card appearance
- 🎴 Download the generated card as a JPEG image
- 💾 Download the JSON file of the generated card
- 🌈 Beautiful CSS styling inspired by actual MTG cards

## 🛠️ Usage

1. Clone the repository:

```bash
git clone https://github.com/louispaulet/light_json_to_MTG.git
```


2. Open `index.html` in your favorite web browser.

3. Choose a JSON file from the dropdown menu or upload your own JSON file by clicking the "Browse" button.

4. Enjoy the generated MTG card appearance! Download the card as a JPEG image or the JSON file using the respective buttons.

## 📄 JSON Structure

Your JSON file should follow this structure:

```json
{
"name": "Card Name",
"type": "Card Type",
"manaCost": "{1}{R}",
"convertedManaCost": 2,
"text": "Card text...",
"flavorText": "Flavor text...",
"power": "1",
"toughness": "1",
"colors": ["R"],
"colorIdentity": ["R"],
"rarity": "Rarity",
"set": "Set Code",
"setName": "Set Name",
"artist": "Artist Name",
"number": "Card Number",
"layout": "normal",
"multiverseid": 123456,
"imageUrl": "https://example.com/image/card_image.jpg"
}
```

## 📦 Dependencies

dom-to-image: Used to convert the generated card DOM element to a JPEG image for download.
## 🙌 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## 📃 License

This project is licensed under the MIT License - see the LICENSE file for details.