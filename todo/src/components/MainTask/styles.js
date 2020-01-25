import styled from 'styled-components';

const Checkbox = styled.input.attrs({ type: "checkbox"})`
    display: none;
`;

const Icon = styled.img`
    opacity: 0;
    margin-left: 15px;
    will-change: transform;

    transition: opacity 200ms linear, transform 200ms linear;

    &:hover {
        transform: scale(1.2);
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;

    font-size: 22px;
    font-weight: 300;
    padding: 20px 15px;
    margin-bottom: 30px;
    cursor: pointer;

    background-image: linear-gradient(270.67deg, rgba(255, 255, 255, 0) 0.13%, rgba(160, 163, 164, 0.483621) 18.84%, rgba(123, 127, 128, 0.671695) 39.1%, rgba(81, 86, 88, 0.885417) 75.46%, #3A4042 99.88%);

    /* criar elemento dentro da label, que venha antes da label */
    &:before {
        content: "";
        box-sizing: content-box;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid var(--color-first);
        margin-right: 10px;
        
        transition: background-color 200ms linear;
    }

    /* if(checkbox) checked mude a cor */
    ${Checkbox}:checked + &:before {
        background-color: var(--color-first);
    }

    &:hover > ${Icon} {
        opacity: 1;
    }
`;


export { Label, Checkbox, Icon };