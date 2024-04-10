import styled from "styled-components";

export const SliderContainer = styled.div`
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const SliderOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0;
    transition: .5s ease all;

    &:hover {
        opacity: .5;
        -ms-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
    }
`;

export const SliderDescription = styled.span`
    font-size: 25px;
    color: #ffffff !important;
    text-align: center;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0 6em;
    height: 50px;
    text-decoration: none;

    @media ${props => props.theme.breakpoints.md} {
        padding: 0 3em;
      }
`

export const ImageContainer = styled.img`
    width: 100%;
    object-fit: cover;
    transition: .5s ease all;

    &:hover {
		-ms-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -o-transform: scale(1.2);
        transform: scale(1.2);
	}
`;

interface NavButtonProps {
    right?: string;
}

export const NavButton = styled.button<NavButtonProps>`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 35px;
    height: 35px;
    outline: none;
    padding: 0;
    border-radius: 50%;
    color: white;
    box-shadow: 0 4px 60px 20px rgba(3, 3, 3, 0.9), inset 0 --3em 3em rgba(3, 3, 3, 0.9);
    transform: translateY(-50%);
    ${(props: any) => props.right ? "right: 2%;" : "left: 2%;"}
`;

export const SliderLink = styled.a`
    color: white;
    font-size: 2rem;
    text-align: center;
    margin-top: 1rem;
    position: absolute;
    cursor: pointer;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 4px 10px 15px rgba(3, 3, 3, 0.9), inset 0 --3em 3em rgba(3, 3, 3, 0.9);

    padding:1rem 1.5rem;
    background: #6b3030;
    border-radius: 15px;
    transition: 0.5s;
    &:hover{
    background: #801414;

    }
`;

export const DotContainer = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 3%;
    left: 50%;
    transform: translateX(-50%);
`;

interface DotProps {
    active?: string;
}

export const Dot = styled.div<DotProps>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    ${(props: any) => props.active === "true" ? "background-color: white;" : "background-color: grey;"}
`;