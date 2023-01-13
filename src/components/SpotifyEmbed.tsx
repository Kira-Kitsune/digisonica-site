import type { Component } from 'solid-js';

type Props = {
    title: string;
    src: string;
};

const SpotifyEmbed: Component<Props> = ({ title, src }) => {
    return (
        <iframe
            title={title}
            src={src}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            class="h-96 w-full rounded-xl"
        />
    );
};

export default SpotifyEmbed;
