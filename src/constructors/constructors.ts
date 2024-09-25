// Constructors

class Song {
  constructor(private artist: string, private title: string) {}
  play() {
    console.log("Playing " + this.title + " by " + this.artist);
  }
}

class Jukebox {
  constructor(private songs: Song[]) {}
  play() {
    const song = this.getRandomSong();
    song.play();
  }
  private getRandomSong() {
    const songCount = this.songs.length;
    const songIndex = Math.floor(Math.random() * songCount);

    return this.songs[songIndex];
  }
}

const songs = [
  new Song("Bushbaby", "Megaphone"),
  new Song("Delays", "One More Lie In"),
  new Song("Goober Gun", "Stereo"),
  new Song("Sohnee", "Shatter"),
  new Song("Get Amped", "Celebrity"),
];

const jukebox = new Jukebox(songs);
Jukebox.play();

class Song1 {
  private artist: string;
  private title: string;

  constructor(artist: string, title: string) {
    // Don't do this!
    this.artist = artist;
    this.title = title;
  }

  play() {
    console.log("Playing " + this.title + " by " + this.artist);
  }
}

// Access modifiers
// 1. private
// 2. protected
// 3. public

// Properties and Methods

class Playlist {
  private songs: Song[] = [];

  static readonly maxSongCount = 30;

  constructor(public name: string) {}
  addSong(song: Song) {
    if (this.songs.length >= Playlist.maxSongCount) {
      throw new Error("Playlist is full");
    }
    this.songs.push(song);
  }
}

// Creating new instance
const playlist = new Playlist("My Playlist");

// Accessing a public instance property
const name1 = playlist.name;

// Calling a public instance method
playlist.addSong(new Song("Therapy?", "Crooked Timber"));

// Accessing a public instance property
const maxSongs = Playlist.maxSongCount;

// Error cannot assign to a readonly property
Playlist.maxSongCount = 20;

// Properties getters and setters

interface StockItem {
  description: string;
  asin: string;
}

class wareHouseLocation {
  private _stockItem: StockItem = { description: "description", asin: "asin" };
  constructor(public aisle: number, public slot: string) {}
  get stockItem() {
    return this._stockItem;
  }
  set stockItem(item: StockItem) {
    this._stockItem = item;
  }
}

const figure = { asin: "B001TEQ2PTI", description: "Figure" };
const warehouseSlot = new wareHouseLocation(15, "A6");
warehouseSlot.stockItem = figure;

// Class Heritage

/* 
There are two types of class heritage in TypeScript. A class can implement an interface using the implements
keyword and a class can inherit from another class using the extends keyword.
*/

interface Audio {
  play(): any;
}

class Song2 implements Audio {
  constructor(private artist: string, private title: string) {}
  play(): void {
    console.log("Playing " + this.title + " by " + this.artist);
  }
  static Comparer(a: Song, b: Song) {
    if (a.title === b.title) {
      return 0;
    }
    return a.title > b.title ? 1 : -1;
  }
}

class Playlist2 {
  constructor(public songs: Audio[]) {}
  play() {
    const song = this.songs.pop();
    song.play();
  }
  sort() {
    this.songs.sort(Song2.Comparer);
  }
}

class RepeatingPlaylist extends Playlist2 {
  private _songIndex = 0;
  constructor(songs: Song2[]) {
    super(songs);
  }

  play() {
    this.songs[this._songIndex].play;
    this._songIndex++;
    if (this._songIndex >= this.songs.length) {
      this._songIndex = 0;
    }
  }
}

// Abstract classes

abstract class Logger {
  abstract notify(message: string): void;

  protected getMessage(message: string): string {
    return `Information: ${new Date().toUTCString()} ${message}`;
  }
}

class ConsoleLogger extends Logger {
  notify(message) {
    console.log(this.getMessage(message));
  }
}

class invasiveLogger extends Logger {
  notify(message) {
    alert(this.getMessage(message));
  }
}

let logger1: Logger;

// Error. Cannot create an instance of an abstract class
logger1 = new Logger();

// Create an instance of a sub-class
logger1 = new invasiveLogger();
logger1.notify("Hello World");
