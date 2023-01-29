import { Component } from 'solid-js';
import TitleBar from '../components/TitleBar';
import DigisonicaLogo from '../assets/images/digisonica_logo_01.png';
import SubtitleBar from '../components/SubtitleBar';
import IconButton from '../components/IconButton';
import {
    FaBrandsAmazon,
    FaBrandsSpotify,
    FaBrandsTwitter,
    FaBrandsYoutube,
    FaSolidDownload,
} from 'solid-icons/fa';
import { SiApplemusic, SiYoutubemusic } from 'solid-icons/si';
import SpotifyEmbed from '../components/SpotifyEmbed';

const ICON_SIZE = 60;

const Home: Component = () => {
    return (
        <div class="mt-[5.625rem] flex w-full flex-col text-xl text-neutral-100">
            <div class="z-30 flex w-full flex-col items-center bg-digisonica-02 py-8 shadow-desynkro 2xl:bg-digisonica 2xl:bg-bottom">
                <TitleBar text="DigiSonica by DeSynkro" />
                <div class="m-16 flex w-11/12 justify-center gap-8 max-xl:flex-col max-xl:items-center lg:w-4/5 xl:items-center">
                    <img
                        src={DigisonicaLogo}
                        alt="DigiSonica Logo"
                        class="h-72 w-72 lg:h-[36rem] lg:w-[36rem]"
                    />
                    <div class="flex flex-col justify-center text-4xl max-lg:text-center">
                        <p class="mb-8">
                            DigiSonica is a Music label created and managed by
                            me.
                        </p>
                        <p>
                            Our goal is to provide High Quality, Accessible and
                            DMCA-Free Music for Content Creators, Streamers,
                            YouTubers and many more!
                        </p>
                        <div class="flex items-center justify-evenly max-2xl:flex-col">
                            <div class="flex flex-col items-center justify-center pt-8">
                                <SubtitleBar text="Listen to us On" />
                                <div class="mt-4 flex items-center justify-center gap-4">
                                    <IconButton
                                        Icon={FaBrandsSpotify}
                                        size={ICON_SIZE}
                                        href="https://open.spotify.com/artist/3hjlx3HGu3eNFEZCfUUvEl?si=dHoF6vWHTxm_sbkXeO5eOg"
                                    />
                                    <IconButton
                                        Icon={SiApplemusic}
                                        size={ICON_SIZE}
                                        href="https://music.apple.com/au/artist/digisonica-by-desynkro/1615415133"
                                    />
                                    <IconButton
                                        Icon={FaBrandsAmazon}
                                        size={ICON_SIZE}
                                        href="https://music.amazon.com/artists/B09W347GWP/digisonica-by-desynkro"
                                    />
                                    <IconButton
                                        Icon={SiYoutubemusic}
                                        size={ICON_SIZE}
                                        href="https://music.youtube.com/channel/UCxdTL_piORqv7WHeL-n3AJQ"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-col items-center justify-center pt-8">
                                <SubtitleBar text="Find us On" />
                                <div class="mt-4 flex items-center justify-center gap-4">
                                    <IconButton
                                        Icon={FaBrandsYoutube}
                                        size={ICON_SIZE}
                                        href="https://youtube.com/@DigiSonica"
                                    />
                                    <IconButton
                                        Icon={FaBrandsTwitter}
                                        size={ICON_SIZE}
                                        href="https://twitter.com/DigiSonica"
                                    />
                                </div>
                            </div>
                            <div class="flex flex-col items-center justify-center pt-8">
                                <SubtitleBar text="Download" />
                                <div class="mt-4 flex items-center justify-center gap-4">
                                    <IconButton
                                        Icon={FaSolidDownload}
                                        size={ICON_SIZE}
                                        href="https://drive.google.com/drive/folders/1-vWAfIb6UIX6RABbYvMVn_r-kJhLrH7k"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="z-20 flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#002b39] to-[#021c23] py-16 shadow-desynkro">
                <TitleBar text="Our Albums" />
                <div class="mt-12 flex items-center justify-center gap-12 max-md:flex-col lg:gap-16">
                    <SpotifyEmbed
                        title="Battles EP"
                        src="https://open.spotify.com/embed/album/6sOtCpTCqhmt7399QYuYLI?utm_source=generator"
                    />
                    <SpotifyEmbed
                        title="Calm Ambitions"
                        src="https://open.spotify.com/embed/album/23BxFOsVzLaf3h6sZGnQBs?utm_source=generator"
                    />
                    <SpotifyEmbed
                        title="Timeless Drifter"
                        src="https://open.spotify.com/embed/album/2WTQI3Z9XaNwDuibQcIEEX?utm_source=generator"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
