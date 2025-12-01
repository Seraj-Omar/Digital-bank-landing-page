import styled from "styled-components";
function Articles() {
    return (
        <Container>
            <HeaderBlock>
                <h2>Latest Articles</h2>
            </HeaderBlock>
            <ArticlesContainer>
                <ul>
                    <li>
                        <img src="/src/assets/image-currency.jpg" alt="image-currency" />
                        <span>By Claire Robinson</span>
                        <h3>Receive money in any currency with no fees</h3>
                        <p>The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </li>
                    <li>
                        <img src="/src/assets/image-restaurant.jpg" alt="image-restaurant" />
                        <span>By Wilson Hutton</span>
                        <h3>Treat yourself without worrying about money</h3>
                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </li>
                    <li>
                        <img src="/src/assets/image-plane.jpg" alt="image-plane" />
                        <span>By Wilson Hutton</span>
                        <h3>Take your Easybank card wherever you go</h3>
                        <p>We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </li>
                    <li>
                        <img src="/src/assets/image-confetti.jpg" alt="image-confetti" />
                        <span>By Claire Robinson</span>
                        <h3>Our invite-only Beta accounts are now live!</h3>
                        <p>After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </li>
                </ul>
            </ArticlesContainer>
        </Container>
    );
}
export default Articles;

const Container = styled.section`
    padding: 120px 120px;
    background-color: #fafafa;
`;
const HeaderBlock = styled.div`
    max-width: 540px;
    h2{
        font-size: 35px;
        font-weight: 500;
        margin-bottom: 25px;
        color: #2d314d;
    }
`;
const ArticlesContainer = styled.ul`
    ul{
        display: flex;
        gap: 30px;

        li{
        
            list-style: none;
            width: 100%;
            background-color: #fff;
            img{
                width:  300px;
                height: 200px;
                border-radius: 8px 8px 0 0;
                padding: 0;
            }
            *{
                padding: 0 20px;
            }
            h3{
                font-size: 20px;
                margin: 15px 0;
                color: #2d314d;
            }
            p
            {
                font-size: 16px;
                color: #6c707e;
                line-height: 1.6;
            }
            span{
                display: block;
                margin-top: 15px;
                font-size: 14px;
                color: #a8abb8;
            }
        }
    }
`;