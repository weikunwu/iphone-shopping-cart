import React from "react";
import styled from "styled-components";


const Button = ({
    className,
    children,
    onClick
}) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default styled(Button)`
    padding: 0.5rem;
    background: #0d6efd;
    border-radius: 5px;
    color: white;
    border: none;
    :hover {
    background: #0b5ed7;
    }
`;