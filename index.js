// You are currently looking at the source code of FreeBuild Util.
// Feel free to use the griefer lists :)
// Most of the griefer data here is from the FreeBuild Wiki.
import axios from "axios";

let Griefers;
let Ragebaiters;
const ModuleVersion = "1.0.2";

const grayLines = "&7--------------------";

    axios.get("https://raw.githubusercontent.com/Glitch-Herobrine/Hypixel-Griefers-List/refs/heads/main/allgriefers.txt")
        .then(response => {
            Griefers = response.data.split(" ");
        })
        .catch(error => {
            ChatLib.chat(`&cAn error occured: ${error}`)
        });

    axios.get("https://raw.githubusercontent.com/Glitch-Herobrine/Hypixel-Griefers-List/refs/heads/main/ragebaiters.txt")
        .then(response => {
            Ragebaiters = response.data.split(" ");
        })
        .catch(error => {
            ChatLib.chat(`&cAn error occured: ${error}`)
        });

register("command", (args) => {
    ChatLib.chat(`&7--------------------\n&aFreeBuild Util\n&7Version: ${ModuleVersion} \n&7--------------------`);
}).setName("fbutil");

register("command", (args) => {
    let players = TabList.getNames();

    let griefersFound = 0;
    let ragebaitersFound = 0;

    Griefers.forEach((griefer) => {
        if (players.find(p => p.split(" ")[2] === griefer|| p.split(" ")[1] === griefer || p.split(" ")[0] === griefer)){
            ChatLib.chat(`&c[SCAN]: Griefer found: ${griefer}`);
            griefersFound++;
        };
    });


    Ragebaiters.forEach((ragebaiter) => {
        if (players.find(p => p.split(" ")[2] === ragebaiter || p.split(" ")[1] === ragebaiter || p.split(" ")[0] === ragebaiter)){
            ChatLib.chat(`&c[SCAN]: Ragebaiter found: ${ragebaiter}`);
            ragebaitersFound++;
        };
    });

    let resultColorCode;
    griefersFound+ragebaitersFound>=1?resultColorCode = "&c":resultColorCode = "&a";

    setTimeout(() => {
        ChatLib.chat(`${grayLines}\n&a${resultColorCode}Scan completed\n${grayLines}\n&a${griefersFound} griefers found\n&a${ragebaitersFound} ragebaiters found.\n${grayLines}`);
    }, 1000);

}).setName("scan");
