const gallery = document.getElementById("gallery");

// Example messages per image ID (customize these!)
const personalizedMessages = {
  1: "Today 3 AUGUST ~ Special Day",
  2: "20years ago, u was born.",
  3: "A mother got a hardworking daughter",
  4: "A sister got a protector.",
  5: "who is born like a daughter but works like a son for her mother",
  6: "and protect a sister like a brother",
  7: "years passed away with full of ups and down",
  8: "the stronger gets more stronger day by day",
  9: "she takes a admission at Avadh collegiate",
  10: "Everyone used to tease her for her accent",
  11: "bully her but she still don't lose",
  12: "get stronger and promoted to class 9",
  13: "where she met a beautiful friend like me",
  14: "the bond get stronger by time and she hold my stronger",
  15: "when on 10th everyone backbites about me",
  16: "she holds me and stand by me",
  17: "soon we started to hold special place in each others heart ",
  18: "On 10th class, i introduced her to my bestfriend",
  19: "And we become bff like 3idiots",
  20: "we used to tease her by tieing her dupatta with braid",
  21: "she was quite coward girl because of her family",
  22: "but i made her fearless nd let her try every dare",
  23: "my day was incomplete without talking to her",
  24: "my phone calls with her is always like 1h,r2hrs",
  25: "soon the school end!",
  26: "we  went to different colleges",
  27: "but we still are together and always be too",
  28: "now she become a most mischievous in a group",
  29: "In our group there is monkey too whose name is 'monkey' ",
  30: "you know if you know we sometime call her dog too",
  31: "now its ur 20th birthday",
  32: "you entered in ur twenties it should be special for you",
  33: "so i maded this for you",
  34: "hope you remember this forever and it will be memorable for u",
  35: "i cant organize a bday surprise like you but planned to manage this",
  36: "this memory board is full of pictures of memories ",
  37: "which we spended together which consist of endless laughs and love",
  38: "we will be forever with each other ",
  39: "to hold each other in every ups and down",
  40: "you like my soulsister a lil baby",
  41: "whom i cant see in a pain my darlo",
  42: "you are like my param mitra param sakhi",
  43: "just like tarak mehta to jethalal",
  44: "krishna to sudama , kavi to sambha ji",
  45: "these lines i specially felt for u -->",
  46: "तुम नमक नहीं चंदन हो कवि तुम तिलक हमारे माथे का",
  47: "दोस्त है तो आंसुओं की भी शान होती है,",
  48: "दोस्ती ना हो तो महफिल भी कब्रिस्तान होती है,",
  49: "सारा खेल तो दोस्ती का ही है,",
  50: "वरना मय्यत और बारात एक समान होती है।",
  51: "अजनबी थे तुम हमारे लिए,",
  52: "यू दोस्त बनकर मिलना अच्छा लगा,",
  53: "बेशक सागर से गहरी है तुम्हारी दोस्ती,",
  54: "तैरना तो आता था पर डूबना अच्छा लगा!!",
  55: "एक रात रब ने मेरे दिल से पूछा,",
  56: "तू दोस्ती में इतना क्यों खोया है?",
  57: "दिल बोला दोस्तों ने ही दी है सारी खुशियाँ,",
  58: "वरना प्यार करके तो दिल हमेशा रोया है!!!",
  59: "I want to advice you -you had a great potential",
  60: "best figure, good looks, happy energy nd bestest vibes",
  61: "be the one who people wants not the one who chase people",
  62: "LOvE YoU THe MOST BFF",

  // ...
  // You can continue up to 63
};

for (let i = 1; i <= 62; i++) {
  const card = document.createElement("div");
  card.className = "card";

  const message = personalizedMessages[i] || `You clicked on Image ${i}`;

  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="images/${i}.jpg" alt="Image ${i}">
      </div>
      <div class="card-back">
        ${message}
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    card.classList.add("flipped");

    // Unflip after 15 seconds
    setTimeout(() => {
      card.classList.remove("flipped");
    }, 20000);
  });

  gallery.appendChild(card);
}
