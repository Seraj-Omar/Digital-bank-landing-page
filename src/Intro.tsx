import styled from "styled-components";
function Intro() {
    return (
        <Container>
            <Content>
                <h1>Next generation digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <button>Request Invite</button>
            </Content>
            <img className="mockups" src="/src/assets/image-mockups.png" alt="mockups" />
            <img className="background" src="/src/assets/bg-intro-desktop.svg" alt="background" />
        </Container>
    );
}
export default Intro;
const Container = styled.section`
    background-color: #fafafa;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 80px;
    overflow: hidden;
    .mockups{
        position: relative;
        z-index: 2;
        right: -15%;
        margin-top: -17%;
    }
    .background{
        position: absolute;
        top: -30%;
        right: -30%;   
        z-index: 1;
    }
`;
const Content = styled.div`
    max-width: 500px;
    margin-top: -150px;
    margin-left: 100px;
    h1{
        font-size: 48px;
        margin-bottom: 20px;
        font-weight: 600;
        color: #2d314d;
    }
    p{
        font-size: 18px;
        line-height: 1.6;
        color: #9698ab;
        margin-bottom: 30px;
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