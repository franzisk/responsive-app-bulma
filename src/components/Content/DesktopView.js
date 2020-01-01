import React from "react";
import classNames from "classnames";
import Tile from "./Tile";
import { useWindowDimensions } from "../WindowDimensionsProvider";
import { useEffect, useState } from "react";
import Modal from "../Modal";

const getClassName = idx => {
    switch (idx) {
        case 0:
            return "is-info";
        case 1:
            return "is-success";
        case 2:
            return "is-primary";
        case 3:
            return "is-danger";
        default:
            return "is-warning";
    }
};

const DesktopView = ({ items }) => {
    const { width } = useWindowDimensions();

    const isVertical = width > 414 && width < 1088;
    const classes = classNames("tile is-ancestor", {
        "is-vertical": isVertical
    });

    const [modalHidden, setModalHidden] = useState(false);

    useEffect(() => {
        console.log("desktop width =", width);
        console.log("classes =", classes);
    });

    const toggleModal = () => {
        setModalHidden(modalHidden => !modalHidden);
    };

    return (
        <div className="section">
            <button className="button is-dark is-large" onClick={toggleModal}>
                Open Modal
            </button>
            <div className="notification is-warning">
                <button className="delete"></button>
                Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>,
                tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{" "}
                <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
            </div>

            <article className="message">
                <div className="message-header">
                    <p>Hello World</p>
                    <button className="delete" aria-label="delete"></button>
                </div>
                <div className="message-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat
                    ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum{" "}
                    <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
                    sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
                    facilisis sodales sem.
                </div>
            </article>

            <progress className="progress is-medium is-dark" max="100">
                45%
            </progress>

            <Modal closeModal={toggleModal} modalState={modalHidden} title="Example modal title">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet justo in arcu efficitur malesuada nec ut
                    diam. Aenean a iaculis eros. Proin nec purus congue, rutrum sapien id, sodales ante. Nam imperdiet sapien pretium leo
                    dapibus euismod. Ut ac venenatis nunc. Praesent viverra purus vel lacus ullamcorper porta a a augue. Proin rhoncus
                    tempus leo sed ultricies. In luctus aliquam placerat. Cras efficitur enim vitae vulputate consequat. Nulla tellus est,
                    fringilla quis nisi eu, aliquam finibus eros.
                </p>
                <p>
                    Aliquam est dui, varius eu tempor ac, ornare vel magna. Suspendisse potenti. Nullam gravida fermentum turpis, at
                    ultricies risus bibendum sit amet. Nulla et arcu id nisi semper ullamcorper cursus sed magna. Phasellus pulvinar ligula
                    vehicula consequat sagittis. Donec tristique tellus sed ex euismod ullamcorper. Vivamus nibh metus, scelerisque sed
                    lorem eget, auctor lobortis sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                    egestas. Proin congue auctor diam, efficitur dignissim neque. Pellentesque vitae odio ut odio auctor feugiat. Curabitur
                    eget mauris nibh. Vestibulum massa nunc, iaculis at purus venenatis, mollis tincidunt tortor.
                </p>
            </Modal>

            <div className={classes}>
                {items.map((item, idx) => (
                    <Tile className={getClassName(idx)} key={item.title} {...item} />
                ))}
            </div>
        </div>
    );
};

export default DesktopView;
