import styled from "styled-components";

function Header() {
    return (
        <Container>
            <img src="/src/assets/logo-dark.svg" alt="digital bank logo" />
            <nav>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
            </nav>
            <button>Request Invite</button>
        </Container>
    );
}
export default Header;

const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px 40px;
    background-color: #fff;
    nav{
        display: flex;
        gap: 30px;
        list-style: none;
        a{
            text-decoration: none;
            color: #c2c1c5;
            font-weight: 500;
            font-size: 16px;
            transition: color 0.3s ease-in-out;
            &:hover{
                color: #31d35c;
            }
        }
    }
    button{
        background: linear-gradient(to bottom left, #31d35c 0%, #2bb7da 100%);
        border: none;
        border-radius: 20px;
        color: #fff;
        padding: 10px 20px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover{
            background: linear-gradient(to bottom left, #2bb7da 0%, #31d35c 100%);
            transform: translateY(-2px);
            box-shadow: 0 5px 20px rgba(49, 211, 92, 0.4);
        }
    }
`;