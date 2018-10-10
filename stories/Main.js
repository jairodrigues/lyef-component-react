import React from 'react';
import FullHeader from '../src/Main'; // This is our component
import { storiesOf } from '@storybook/react';

storiesOf('React full Header', module)
    .add('with Title', () => <FullHeader title="TDD" />)
    .add('with title and subtitle', () => (
        <FullHeader title="TDD" subtitle="What is tested" />
    ))
    .add('whit title, subtitle, bgColor', () => (
        <FullHeader title="TDD" subtitle="What is tested" bgColor="green" />
    ))
    .add('whit title, subtitle, bgColor, textColor', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested"
            bgColor="green"
            textColor="blue"
        />
    ))
    .add('whit title, subtitle, bgColor, textColor, font', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested"
            bgColor="green"
            textColor="blue"
            font="cursive"
        />
    ))
    .add('whit title, subtitle, bgImg', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested"
            bgImg="https://s2.glbimg.com/LBh9_LSJJG8quDwwmoXGONDtK8s=/0x0:976x549/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/N/O/k9E2CjQyiSgIVDzuDYKQ/3-bolsonaro-e-haddad.jpg"
        />
    ))
    .add('whit title, subtitle, video', () => (
        <FullHeader
            title="TDD"
            subtitle="What is tested"
            video="https://youtu.be/6DrNC-xQcGs"
        />
    ));
