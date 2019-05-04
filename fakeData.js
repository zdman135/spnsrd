let axios = require('axios');
let faker = require('faker');

let userProfiles = [];
events = [];
const profilePics = [ 
  'https://pbs.twimg.com/media/DtRQMY0XQAESt29.jpg',
  'https://static1.squarespace.com/static/58297336c534a550aa00672c/t/5adf700daa4a9930800df009/1527880299003/Natural+Tinder+photo',
  'https://i.pinimg.com/originals/14/ee/e0/14eee04d3befa06358092301ee755c76.png',
  'https://data.whicdn.com/images/38062161/large.jpg',
  'https://cina.ca/wp-content/uploads/2018/08/Lisa.jpg',
  'https://profilepicturesdp.com/wp-content/uploads/2018/07/tumblr-profile-pictures-girls-8.jpg',
  'https://profilepicturesdp.com/wp-content/uploads/2018/07/tumblr-profile-pictures-girls-7.jpg',
  'https://data.whicdn.com/images/64813451/large.jpg',
  'https://www.greenmangomore.com/wp-content/uploads/2017/03/Disha-patani-hot-instagram-profile-images-8.jpg',
  'https://scontent-amt2-1.cdninstagram.com/vp/ca95af4dcf20f39c6edef5efb3ee03dd/5D55E185/t51.2885-15/e35/54247515_520969388431118_2434961570250583408_n.jpg?_nc_ht=scontent-amt2-1.cdninstagram.com&se=7&ig_cache_key=MjAxNDg1NDUxMTI2NTc3MDE0Mg%3D%3D.2'
];
const festivalImages = [
  'https://ichef.bbci.co.uk/news/660/cpsprodpb/70B4/production/_105225882_fyretents976.jpg',
  'https://cdn.craftbeer.com/wp-content/uploads/Oskar_Blues_Festival_1200.jpg',
  'https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2018/09/26220126/GABF_fullwidth2.jpg',
  'https://www.keystonefestivals.com/wp-content/uploads/bgb1.jpg',
  'https://cdn.funcheap.com/wp-content/uploads/2017/07/New-Belgium-Tour-de-Fat-AVL-2017-0838-563x376.jpg',
  'http://electriczoo.com/wp-content/gallery/2014/EZoo-2014-Crowd-People-DLG-6008.jpg',
  'https://blog.malwarebytes.com/wp-content/uploads/2018/10/shutterstock_612941954-900x506.jpg',
  'https://ichef.bbci.co.uk/news/660/cpsprodpb/1038A/production/_100924466_shambala.jpg.jpg',
  'https://www.rebirth-festival.nl/app/uploads/2018/11/20180408-Rossumedia-RebirthFestival-0151-7622-1920x1080.jpg',
  'https://assets.visitphilly.com/wp-content/uploads/2018/02/South-Street-Headhouse-District-Spring-Festival-dancers-and-crowd-recrop-J-Fusco-2200VP.jpg',
  'https://o7fe62guj6g73vlj30xpogpm-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/SCOTT_LONDON_2018_0078-1-665x375.jpg',
  'https://s.hdnux.com/photos/75/40/37/16123890/7/920x920.jpg',
  'https://i0.wp.com/metalinjection.net/wp-content/uploads/2019/03/woodstock.jpg?fit=600%2C391&ssl=1',
  'http://www.gurududu.org/wordpress/wp-content/uploads/2015/04/Chilling-out-at-Awesome-Festival-Perth.jpg',
  'http://mymolo.de/wp-content/uploads/2016/11/MYMOLO_Festival_Fail_WILDPINKLER-1024x1024.jpg'
];
const festivalShortText = [
  "Childish Gambino, Tame Impala, Ariana Grande, Janelle Monáe, The 1975, Solange, Khalid, Kid Cudi",
  "Arctic Monkeys, Bruno Mars, The Weeknd, Jack White, Travis Scott, The National, Vampire Weekend, ODESZA",
  "his year the SXSW Music Festival is pleased to present first-time showcase lineups by Spacebomb Records, YEAR0001, Playtime Festival Mongolia, Don't Come to LA, She Shreds, Verve Label Group, and Mahogany, as well as highly anticipated returning showcases from Communion, Gorilla vs. Bear + Luminelle, and BBC",
  "Tame Impala, Fleet Foxes, Lauryn Hill, Courtney Barnett, Chaka Khan, The War on Drugs, Earl Sweatshirt, Blood Orange",
  "Armin van Buuren, Afrojack, Martin Garrix, Eric Prydz, Hardwell, Diplo, Dimitri Vegas & Like Mike, Ferry Corsten",
  "Khalid, Shawn Mendes, Camila Cabello, Hozier, David Byrne, CHVRCHES, Deftones, Lil Wayne",
  "Adam Beyer, Afrojack, Alesso, Armin van Buuren, Carl Cox, The Chainsmokers, Black Coffee, David Guetta",
  "Florence + the Machine, Major Lazer, The 1975, The Strokes, Tyler, the Creator, Lil Wayne, Brockhampton, Nas",
  "The Rolling Stones, Dave Matthews Band, Katy Perry, Santana, Van Morrison, Earth, Wind & Fire, Jimmy Buffet & The Coral Reefer Band",
  "Kaskade, Marshmello, Martin Garrix, Virtual Self, Tiësto, Alesso, Jauz, Rezz",
  "ODESZA, Kygo, Bassnectar, Zeds Dead, Gorgon City, Honey Dijon, Alison Wonderland, Gramatik",
  "Burning Man doesn't have a lineup per se, instead showcasing a programme of music, art and culture driven by its attendees.",
  "Phish, Childish Gambino, Post Malone, ODESZA, The Lumineers, Solange, Cardi B, Grand Ole Opry",
  "Kendrick Lamar, Lil Wayne, A$AP Ferg, Tory Lanez, Swizz Beatz & Friends, Remy Ma, Rich the Kid, Megan Ryte & Friends",
  "Erykah Badu, Miguel, Tyler, The Creator, Janelle Monáe, The Internet, Twin Shadow, Lolawolf, Jaden Smith"
];
const festivalLongText = [
  "Selling out fast every year, the Indio desert becomes a fashionable hive of the coolest bands watched by trendy people and celebrities. Near the top of everyone's bucket list of festivals, the Coachella lineup is a constant source of annual anticipation and a hotbed for musical discussion.",
  "A wonderful gathering of music, dance, comedy and craft booths, Lollapalooza is another multi-genre delight which also provides a platform for political and non-profit artists and groups. The festival is forever creating historical moments in many a musicians career firmly cementing it in the global hall of fame for festivals.",
  "Regarded as the ultimate trend-setter and launcher of careers, SXSW is an annual showcase of music, film and interactive highlights enjoyed through performances, showcases, talks, screenings and more. Virtually taking over the city of Austin, everyone in the world of music from fans to media flock here to discover the next big thing.",
  "Organised by independently focused music source Pitchfork Media, this three day event is a music genre melting pot of rock, hip-hop, electronic, jazz, punk and any other genre and sub-genre you want to celebrate. With a record fair, food, art and beverages from local and national vendors, this truly is a cultural feast.",
  "Aside from its two popular US events, this fairytale carnival experience has also visited Puerto Rico, Mexico and the UK. Inviting attendees into an EDM wonderland of neon decor and walkabout performers, every year the event pulls in a record attendance with fans desperate to escape reality through electronic music.",
  "Inspired by a concert series of the same name, the festival is an eight stage celebration of all things music, along with an art market, delicious food and drink, a dedicated family area and much more. Originally a one weekend event, the festival successfully expanded to two weekends in 2012 after the local council voted unanimously to allow it to do so.",
  "Seen as the ultimate gathering for electronic music fans across the nation and globe, the streets of Miami turn into a bold and pumping party with worshipped DJs providing the summertime soundtrack.",
  "Another event which proves the music loving potential of Randall's Island Park is Govenors Ball, an exciting and infectious mix of rock, hip-hop, electronic, pop and folk. Providing a variety of music and food tastes, whether you look to kick back and relax or surrender yourself to beats and riffs, Governors Ball has what you want.",
  "Few festivals mean more to their community than New Orleans Jazz & Heritage Festivals. Dating back to 1970, the festival is a complete cultural experience reaching well beyond the music. A rigid, stuffy affair this is not: Jazz Fest has expanded its purview over the years, growing alongside one of the most vibrant cities in the world.",
  "Turning the parkland of Randall's Island Park into an electronic dance utopia, the creative minds behind Tomorrowland, Mysteryland and Sensation have taken over the event injecting the same passionate magic into an event all dance fans anticipate.",
  "Fusing bands with electronic DJs, this forest takeover is an alternative to the field-only festivals we are used to, as festival goers are immersed in the colours of the nature surrounding them, as thumping sounds follow them around from stage to stage.",
  "Burning Man is the ultimate festival, taking place in the Nevada desert. Started in 1986, the festival has grown into a cultural phenomenon and has inspired imitation festivals around the globe.",
  'Originally focused on jam bands and folk rock, this festival has expanded to include an impressive array of genres and was once praised by Rolling Stone magazine as being amongst the "50 Moments That Changed Rock & Roll".',
  "No festival has been more integral to the development of hip hop than Hot 97 Summer Jam. Giving a platform to the freshest names, as well as providing fans with an opportunity to see the superheroes of rap, the festival has hosted its fair share of classic moments, with performers bringing out huge special guests having become the norm.",
  "Starting out as a DIY movement in the US, as a response to feeling like an outsider and desiring a sense of belonging, AFROPUNK is now one of the world's most famous cultural movements. Its mix of art, activism and music now attracts up to 60,000 people and spreads its message in cities around the globe, celebrating black culture and giving community to those who feel marginalised in modern western societies."
];

isItSponsored = () => {
  let rounding = Math.round(Math.random());

  if(rounding == 1) {
    return true
  }
  else {
    return false
  }
}

randomCategory = () => {
  const category = ["Music", "Sports", "Education", "Food and Drink", "Culture", "Other"];
  return category[Math.floor(Math.random() * category.length)];
}

createUserObjects = () => {
  for(let i = 0; i < profilePics.length; i++) {
    let userObject = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: "testpass",
      password2: "testpass",
      image: "",
      isSponsor: "",
      age: Math.floor(Math.random() * 60) + 20    
    }

    userObject.  = isItSponsored()
    userObject.image = profilePics[i];
    userProfiles.push(userObject)
  }
};

createUserObjects()

userProfiles.forEach(profile => {
  axios.post("http://localhost:3000/api/users/register", profile).then(() => {

  });
});

setTimeout(() => {
  axios.get('http://localhost:3000/api/users/').then((user) => {
  createEventObject = () => {
    for(let i = 0; i < festivalImages.length; i++) {
      let eventName = faker.company.bsBuzz();
      let eventObject = {
        date: faker.date.future(),
        isSponsored: "",
        sponsors: [],
        image: "",
        name: eventName.charAt(0).toUpperCase() + eventName.slice(1) + " Festival",
        location: faker.address.city() + ", " + faker.address.state(),
        shortText: "",
        longText: "",
        category: "",
        createdBy: ""
      }
      
      eventObject.isSponsored = isItSponsored()
      eventObject.image = festivalImages[i];
      eventObject.shortText = festivalShortText[i];
      eventObject.longText = festivalLongText[i];
      eventObject.category = randomCategory();

      eventObject.createdBy = user.data[Math.floor(Math.random() * user.data.length)]._id

      events.push(eventObject)
    }
  }

  createEventObject()

  events.forEach(event => {
    axios.post("http://localhost:3000/api/events/createevent", event).then(() => {
    })
  })
});
}, 10000);