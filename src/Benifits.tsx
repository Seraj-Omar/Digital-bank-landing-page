import styled from "styled-components";
function Benefits() {
    return (
        <Container>
            <HeaderBlock>
                <h2>Why choose Digitalbank?</h2>
                <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </HeaderBlock>


            <BenefitsContainer>
                <ul>
                    <li>
                        <img src="/src/assets/icon-online.svg" alt="icon-online" />
                        <h3>Online Banking</h3>
                        <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </li>
                    <li>
                        <img src="/src/assets/icon-budgeting.svg" alt="icon-budgeting" />
                        <h3>Simple Budgeting</h3>
                        <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                    </li>
                    <li>
                        <img src="/src/assets/icon-onboarding.svg" alt="icon-onboarding" />
                        <h3>Fast Onboarding</h3>
                        <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                    </li>
                    <li>
                        <img src="/src/assets/icon-api.svg" alt="icon-api" />
                        <h3>Open API</h3>
                        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                    </li>
                </ul>
            </BenefitsContainer>
        </Container>
    );
}
export default Benefits;

const Container = styled.section`
    background-color: #f4f5f7;
    padding: 120px 120px;
`;
const HeaderBlock = styled.div`
    max-width: 540px;
    h2{
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 25px;
        color: #2d314d;
    }
    p{
        font-size: 18px;
        color: #6c707e;
        line-height: 1.6;
    }
`;
const BenefitsContainer = styled.ul`
    ul{
        display:flex;
        flex-direction: row;
        gap: 30px;
        margin-top: 60px;
        line-height: 1.6;
        li{
            list-style: none;
            padding: 40px;
            border-radius: 8px;
            flex: 1;
            text-align: left;
            img{
                margin-bottom: 30px;
            }
            h3{
                font-size: 22px;
                color: #2d314d;
                margin-bottom: 20px;
                font-weight: 500;
            }
            p{
                font-size: 16px;
                color: #6c707e;
            }
        }
    }
`;