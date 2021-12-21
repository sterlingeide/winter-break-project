import React, { Component } from 'react';
import './InstaAlbum.css';
import Character from './Character';

const characterList = [
    {
        title: 'Fullmetal Alchemist',
        creator: 'Shō Aikawa',
        caption: 'In the fictitious country of Amestris, two young brothers, Edward and Alphonse Elric, are bestowed with the gift of alchemy - the supernatural ability to transform matter.',
        user: 'Fullmetal Fan',
        tags: ['#fullmetalalchemist', '#anime'],
        date: '10/4/2003',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b1/Fullmetal_Alchemist_%282003%29_key_visual.png'
    },
    { 
        title: 'Death Note',
        creator: 'Tsugumi Ohba',
        caption: 'Get the notebook!',
        user: '@jakepalmer',
        tags: ['#death', '#murder'],
        date: '2006',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg'
    },
    {
        title: 'Dragon Ball Z',
        creator:'Akira Toriyama',
        caption:'"Dragon Ball Z" follows the adventures of Goku who, along with the Z Warriors, defends the Earth against evil. The action adventures are entertaining and reinforce the concept of good versus evil. "Dragon Ball Z" teaches valuable character virtues such as teamwork, loyalty, and trustworthiness.',
        user: 'Dev',
        tags: ['',''],
        date: 'First episode date: April 26, 1989',
        imageUrl: 'https://ssl-static.libsyn.com/p/assets/c/8/1/0/c8102f2ab1500fd8/dbznextdimension_01.jpg'
    },
    {
        title: 'One Piece',
        creator: 'Eiichiro Oda',
        caption: 'Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger.',
        user: '@chillwill',
        tags: ['#luffy','#gumgum'],
        date: "July 22, 1997",
        imageUrl: 'https://cdn.vox-cdn.com/thumbor/7TzXXGeyMRbOjKE7UDiNXOHlQK0=/0x0:1280x738/1200x800/filters:focal(538x267:742x471)/cdn.vox-cdn.com/uploads/chorus_image/image/65232906/one_piece.0.png'
    },
    {
        title: 'Mobile Suit Gundam',
        creator: 'Yoshiyuki Tomino',
        caption: 'It is year 0079 of the Universal Century. Mankind has moved to space, living in colony clusters known as "Sides." One of these Sides declares itself the "Principality of Zeon" and declares war on the Earth Federation, the governmental body currently ruling Earth. Using powerful humanoid robots known as "mobile suits," Zeon quickly gains the upper hand.',
        user: 'Neo Neofotistos',
        tags: ['#mecha', '#sci-fi'],
        date: 'Arpil 7, 1979',
        imageUrl: 'https://cdn.myanimelist.net/images/anime/5/88524.jpg'
    },
    {
        title: 'Avatar: The Last Airbender',
        creator: 'Michael Dante DiMartino; Bryan Konietzko',
        caption: 'Uncle Iroh was a central character from this Nickelodeon Series',
        user: '@PatrickBrennan',
        tags: ['#wise', '#tea'],
        date: 'February 21, 2005',
        imageUrl: 'https://imgur.com/a/LjF2iRQ'
    },
    { 
        title: 'Akira',
        creator: 'Katsuhiro Ôtomo',
        caption: 'A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath who can only be stopped by a teenager, his gang of biker friends and a group of psychics.',
        user: 'jboogiewitdahoodie',
        tags: ['#fun', '#whoooo'],
        date: '1988',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/AKIRA_%281988_poster%29.jpg/220px-AKIRA_%281988_poster%29.jpg'
    },
    {
        title: 'Violet Evergarden',
        creator: ' Akatsuki, Kana',
        caption: 'anime adaptation of the violet evergarden novel',
        user: 'kabin',
        tags: ['#comming-of-age','#fantasy'],
        date: 'Jan 11, 2018',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpGo4nmUkBO1MZrGppPcSt9V5fwVqbeOHe2A&usqp=CAU'
    },
    {
        title: 'K',
        creator: 'GoHands, GORA',
        caption: 'Its not about a mans appearence, or whats inside.. My policy is to judge a man by his actions',
        user: '@Hunter Lee McGuire ',
        tags: ['#Action', '#Scifi'],
        date: '2012',
        imageUrl: 'blob:https://imgur.com/21a54957-8fc8-4462-a9e9-4b4999cf64e8'
    },
    { 
        title: 'Maid-Sama!, When The Tough Girl Is Secretly A Maid',
        creator: 'Hori-san to Miyamura-kun',
        caption: 'This is another high school romcom series, but this time, the male lead is a superstar, contrasting sharply with the seemingly boring Miyamura-kun. Takumi Usui could land any girl he likes, but he has eyes for only one: the tough-as-nails student council president, Misaki Ayuzawa.',
        user: 'Mekel Tensley',
        tags: ['#romantic', '#comedy'],
        date: 'January 10, 2021',
        imageUrl: 'https://static2.cbrimages.com/wordpress/wp-content/uploads/2021/02/Screen-Shot-2021-02-06-at-4.17.27-PM.png?q=50&fit=crop&w=740&h=374&dpr=1.5'
    }
]

const displayCharacterList = characterList.map((c, idx) => {
    return (
        <Character 
            key={idx} 
            title={c.title} 
            creator={c.creator} 
            caption={c.caption} 
            user={c.user} 
            tags={c.tags} 
            date={c.date} 
            imageUrl={c.imageUrl} 
        />
    );
})


class CharacterContainer extends Component {
    render() {
        return (
            <div>
                <div className="navbar is-inline-flex is-transparent">
                    <div className="navbar-brand">
                        <a className="navbar-item">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-item">
                            <div className="control has-icons-left">
                                <input className="input is-small has-text-centered" type="text" placeholder="search" />
                                <span className="icon is-left is-small">
                                    <i className="material-icons">search</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-item is-flex-touch">
                        <a className="navbar-item">
                            <i className="material-icons">explore</i>
                        </a>
                        <a className="navbar-item">
                            <i className="material-icons">favorite_border</i>
                        </a>
                        <a className="navbar-item">
                            <i className="material-icons">person_outline</i>
                        </a>
                    </div>
                </div>
                <div className="columns body-columns">
                    <div className="column is-half is-offset-one-quarter">
                        {displayCharacterList}
                        <footer className="footer">
                            <div className="container is-fluid">
                                <div className="content has-text-centered">
                                    <p>
                                        <strong>Bulma</strong> by
                                        <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                                        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is licensed
                                        <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterContainer;