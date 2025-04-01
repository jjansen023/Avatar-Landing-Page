document.addEventListener("DOMContentLoaded", function () {
    const characters = {
        "Avatar Aang": {
            img: "./images/aang.webp",
            info: "Aang is the last Airbender and the Avatar. \nHe must master all four elements. \nHe has a fun-loving and peaceful nature. \nHis journey is about restoring balance. \nHe eventually defeats Fire Lord Ozai."
        },
        "Avatar Korra": {
            img: "./images/korra2.webp",
            info: "Korra is the next Avatar after Aang. \nShe is headstrong and determined. \nShe struggles with spirituality but grows. \nShe masters airbending last. \nShe brings balance to the world."
        },
        "Katara": {
            img: "./images/katara.gif",
            info: "Katara is a gifted waterbender. \nShe learned from Master Pakku. \nShe is strong-willed and compassionate. \nShe plays a major role in the war. \nShe eventually becomes Aang's wife."
        },
        "Mako": {
            img: "./images/mako.gif",
            info: "Mako is a skilled firebender. \nHe was a pro-bender before joining Korra. \nHe has a tough and protective nature. \nHe later becomes a detective. \nHe helps Korra fight many enemies."
        },
        "Sokka": {
            img: "./images/sokka.webp",
            info: "Sokka is a warrior, not a bender. \nHe is witty and highly intelligent. \nHe creates battle strategies for Team Avatar. \nHe wields a boomerang and sword. \nHe later becomes a respected leader."
        },
        "Amon": {
            img: "./images/amon.webp",
            info: "Amon is the leader of the Equalists. \nHe seeks to remove bending from the world. \nHe has a mysterious past with waterbending. \nHe is a skilled manipulator and fighter. \nHis true identity is Noatak."
        },
        "Toph": {
            img: "./images/toph.gif",
            info: "Toph is a blind earthbender. \nShe invented the art of metalbending. \nShe is tough and independent. \nShe played a major role in the war. \nShe later became a law enforcer."
        },
        "Zaheer": {
            img: "./images/zaheer.webp",
            info: "Zaheer is a dangerous anarchist. \nHe gained airbending unexpectedly. \nHe believes in true freedom. \nHe can achieve flight through detachment. \nHe nearly kills Korra in battle."
        },
        "Zuko": {
            img: "./images/zuko.webp",
            info: "Zuko is the prince of the Fire Nation. \nHe seeks his father's approval. \nHe struggles between good and evil. \nHe joins Team Avatar later. \nHe becomes the Fire Lord."
        },
        "Tenzin": {
            img: "./images/tenzin.gif",
            info: "Tenzin is Aang's eldest son. \nHe is a master airbender. \nHe struggles with leadership responsibilities. \nHe trains Korra in airbending. \nHe helps restore the Air Nation."
        },
        "Azula": {
            img: "./images/azula.webp",
            info: "Azula is Zuko's younger sister. \nShe is a firebending prodigy. \nShe is highly intelligent but ruthless. \nShe suffers from paranoia and breakdown. \nShe is eventually defeated by Zuko."
        },
        "Kuvira": {
            img: "./images/kuvira.gif",
            info: "Kuvira is a powerful metalbender. \nShe seeks to unify the Earth Kingdom. \nShe becomes a dictator in her rule. \nShe fights Korra in a giant mecha. \nShe eventually surrenders and reforms."
        },
        "FireLord Ozai": {
            img: "./images/ozai.webp",
            info: "Ozai is the Fire Lord. \nHe is the main villain of ATLA. \nHe seeks world domination. \nHe wields powerful firebending skills. \nAang defeats him in the finale."
        }
    };

    const characterList = document.querySelectorAll(".Characters li");
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close">&times;</span>
            <img src="" alt="Character Image" class="popup-img">
            <p class="popup-text"></p>
        </div>
    `;
    document.body.appendChild(popup);

    characterList.forEach(li => {
        li.addEventListener("click", function () {
            console.log("Clicked:", this.textContent); // Debugging
            const charName = this.textContent;
            if (characters[charName]) {
                console.log("Character Found:", characters[charName]); // Debugging
                document.querySelector(".popup-img").src = characters[charName].img;
                document.querySelector(".popup-text").textContent = characters[charName].info;
                popup.classList.add("show"); // Use the .show class
            }
        });
    });

    document.querySelector(".close").addEventListener("click", function () {
        console.log("Close button clicked"); // Debugging
        popup.classList.remove("show");
    });

    popup.addEventListener("click", function (e) {
        if (e.target === popup) {
            console.log("Popup background clicked"); // Debugging
            popup.classList.remove("show");
        }
    });
});

