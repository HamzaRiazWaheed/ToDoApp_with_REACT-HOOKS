import styled, {css} from 'styled-components';
import check from '../imgs/check.svg';

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    ${props =>
        {
            if(props.primary && css){
            return `
                background-color: palevioletred;
                color: white;
            `
            }else if(props.delete && css){
            return `
                background-color: orange;
                color: white;
            `
            }
        
        }
    };
`

export const Checkbox = styled.div`
    box-shadow: 0px 0px 1px 0px #009688;
    position: relative;
    width: ${props => props.size && props.size.width? props.size.width : '25px'};
    display: inline-block;
    height: ${props => props.size && props.size.height ? props.size.height : '25px'};
    background-color:${props => props.checked ? '#009688' : '#fff'};
    ${props => 
        props.checked && css`
           background-image: url(${check});
            background-size: 80%;
            background-position: center;
        `
    }
` 

export const SplitView = styled.div`
    display: flex;
    > div {
        width:50%;
        padding: 10px;
    }
`