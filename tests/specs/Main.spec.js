import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import FullHeader from '../../src/Main';

chai.use(chaiEnzyme());

describe('<FullHeader />', () => {
    it('should have header tag when mount', () => {
        const wrapper = shallow(<FullHeader />);
        expect(wrapper.find('header')).to.have.length(1);
    });

    context('title', () => {
        it('should have h1 tag when title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1')).to.have.length(1);
        });

        it('should not have h1 tag when title is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h1')).to.have.length(0);
        });

        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper.find('h1').props().children).to.be.equal('TDD');
        });
    });

    context('subtitle', () => {
        it('hould have h2 when subtitle passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso" />);
            expect(wrapper.find('h2')).to.have.length(1);
        });
        it('should not have h2 tag when subtitle is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('h2')).to.have.length(0);
        });
        it('should have h1 tag with the title passed', () => {
            const wrapper = shallow(<FullHeader subtitle="Curso" />);
            expect(wrapper.find('h2').props().children).to.be.equal('Curso');
        });
    });

    context('BgColor', () => {
        it('Should have background-color equal #ccc when nome is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper)
                .to.have.style('background-color')
                .equal('#ccc');
        });
        it('Should have background-color equal #000 when nome is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" bgColor="#000" />);
            expect(wrapper)
                .to.have.style('background-color')
                .equal('#000');
        });
    });

    context('textColor', () => {
        it('Should have color equal #fff when nome is passed', () => {
            const wrapper = shallow(<FullHeader title="TDD" />);
            expect(wrapper)
                .to.have.style('color')
                .equal('#fff');
        });
        it('Should have color equal #ff00 when nome is passed', () => {
            const wrapper = shallow(
                <FullHeader title="TDD" textColor="#ff00" />
            );
            expect(wrapper)
                .to.have.style('color')
                .equal('#ff00');
        });
    });

    context('font', () => {
        it('Should have font equal #sans-serif when nome is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper)
                .to.have.style('font-family')
                .equal('sans-serif');
        });
        it('Should have color equal opens-sans when nome is passed', () => {
            const wrapper = shallow(
                <FullHeader title="TDD" font="opens-sans" />
            );
            expect(wrapper)
                .to.have.style('font-family')
                .equal('opens-sans');
        });
    });

    describe('bgImage', () => {
        it('Should have background-image equal empty when none is passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper)
                .to.have.style('background-image')
                .equal('url()');
        });
        it('Should have background-image equal bg.jpg when is passed', () => {
            const wrapper = shallow(<FullHeader bgImg="bg.jpg" />);
            expect(wrapper)
                .to.have.style('background-image')
                .equal('url(bg.jpg)');
        });
    });

    context('video', () => {
        it('should have video tag when video is passed', () => {
            const wrapper = shallow(<FullHeader video="myVideo.mp4" />);
            expect(wrapper.find('video')).to.have.length(1);
        });
        it('should not have video tag when video is not passed', () => {
            const wrapper = shallow(<FullHeader />);
            expect(wrapper.find('video')).to.have.length(0);
        });
        it('should have video tag with the video passed', () => {
            const wrapper = shallow(<FullHeader video="MyVideo.mp4" />);
            expect(wrapper.find('video').props().src).to.be.equal(
                'MyVideo.mp4'
            );
        });
    });
});
