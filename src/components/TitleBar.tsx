import type { Component } from 'solid-js';

type Props = {
    text: string;
};

const TitleBar: Component<Props> = ({ text }) => {
    return (
        <div class="flex w-11/12 items-center justify-center rounded-2xl bg-neutral-900 py-2 text-center text-6xl md:w-1/2">
            {text.toUpperCase()}
        </div>
    );
};

export default TitleBar;
