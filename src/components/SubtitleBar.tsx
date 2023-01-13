import type { Component } from 'solid-js';

type Props = {
    text: string;
};

const SubtitleBar: Component<Props> = ({ text }) => {
    return (
        <div class="flex w-72 items-center justify-center rounded-2xl bg-neutral-900 py-2 text-center text-3xl">
            {text.toUpperCase()}
        </div>
    );
};

export default SubtitleBar;
