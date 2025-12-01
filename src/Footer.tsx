import styled from "styled-components";
function Footer() {
    return (
        <Container>
            <FooterContent>
                <div>
                    <img src="/src/assets/logo-light.svg" alt="logo-white" />
                    <SocialIcons>
                        <img src="/src/assets/icon-facebook.svg" alt="icon-facebook" />
                        <img src="/src/assets/icon-youtube.svg" alt="icon-youtube" />
                        <img src="/src/assets/icon-twitter.svg" alt="icon-twitter" />
                        <img src="/src/assets/icon-pinterest.svg" alt="icon-pinterest" />
                        <img src="/src/assets/icon-instagram.svg" alt="icon-instagram" />
                    </SocialIcons>  
                </div>
                <NavLinks>
                    <a href="#">About Us</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                    <a href="#">Support</a>
                    <a href="#">Privacy Policy</a>
                </NavLinks>
                <div>

                <button>Request Invite</button>
                <p>© Easybank. All Rights Reserved</p>
                </div>
            </FooterContent>
        </Container>
    );
}
export default Footer;
const Container = styled.footer`
    background-color: #2d314d;
    padding: 60px 120px;
`;
const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    img{
        margin-bottom: 20px;
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
    p{
        color: #696d85;
        font-size: 14px;
        margin-top: 20px;
    }
`;
const NavLinks = styled.nav`
    display :grid;
    grid-template-columns: repeat(2, auto);
    gap: 15px 50px;
    a{
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        &:hover{
            text-decoration: underline;
        }
`;
const SocialIcons = styled.div`
    display: flex;
    gap: 15px;
    img{
        cursor: pointer;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;