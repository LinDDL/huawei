<template>
    <div class="findNewsList">
        <ul class="clearfix">
            <li v-for="item,index in data">
                <p class="p-img"><img :src="item.shareThumbnail | ht"></p>
                <p class="p-name">{{item.title}}</p>
                <p class="p-promotion" v-if="index===0">{{item.summary}}</p>
                <p class="p-other"><span>{{item.publishTime | formatDate}}</span> <em>{{item.viewAmount}}</em></p>
            </li>
        </ul>
    <div class="click-more"><a>点击查看更多 &gt;</a></div>
    </div>
</template>

<script>
    export default {
        name: 'fItem',
        props:["data"],
        filters:{
           
        },
       
    
    }
</script>

<style scoped>
    .findNewsList ul {
    
        background-color: #fff;
    
    }
    
    
    
    .clearfix:before,
    
    .clearfix:after {
    
        content: " ";
    
        display: table;
    
    }
    
    
    
    .findNewsList ul li {
    
        height: 4.6rem;
    
        background-color: #f8f8f8;
    
        margin-bottom: 0.15rem;
    
        overflow: hidden;
    
    }
    .findNewsList ul .p-img {
    width: 7.5rem;
    height: 4.6rem;
    float: left;
    padding: 0;
}
    
    .findNewsList ul li:first-child .p-img {
    width: 100%;
    height: 11rem;
    float: none;
}

    
    .findNewsList ul li:first-child {
    
        height: auto;
    
        background-color: #fff;
    
    }
    .findNewsList ul .p-img img {
    width: 100%;
    height: 100%;
}
    .findNewsList ul .p-name {
    padding: 0.6rem 0.8rem 0;
    margin-bottom: 0.6rem;
    font-size: 0.7rem;
    line-height: 1.25;
    color: #000;
    height: 1.45rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
    .findNewsList ul li:first-child .p-name {
    font-size: 0.75rem;
    line-height: 1;
    white-space: nowrap;
    margin: 0.5rem 0.75rem 0.35rem;
    display: block;
    -webkit-line-clamp: 1;
    padding: 0;
    height: auto;
}
.findNewsList ul li:first-child .p-promotion {
    font-size: 0.6rem;
    color: #656565;
    padding: 0 0.75rem;
    line-height: 0.9rem;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.findNewsList ul .p-other {
    padding: 0.6rem 0.85rem 0.6rem 8.35rem;
    font-size: 0.6rem;
    color: #b8b8b8;
    position: relative;
    bottom: -0.15rem;
}
.findNewsList ul li:first-child .p-other {
    border-top: 1px solid #eee;
    margin: 0.35rem 0.75rem 0;
    line-height: 1.5rem;
    position: relative;
    padding: 0;
}
.findNewsList ul .p-other em {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAYFBMVEUAAAC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjHiTYaAAAAH3RSTlMADVpRNbDvzqKBZcGplQb0x41B3Jol1XVK5h4X4LktZu3JfgAAActJREFUSMftVNtyqzAMlI2JMXfMNRDK///lkWzHYjhpm8dOp/sQYmklrWQB/OHH4kNWQ5YNXTK+w7ZVe0QURn1Dl/q4oE3epXOZ5DPp+/EJMvGKnzOhyXJr85QNjxdFBnaXYTqqYFt3oQvn602Dv4bNFVlvXhacsWqXuV5Drq3TfUkySJZcXba9Zv52J8sM0GIVah/PiBSgxvRDqKRjhJjovCDRPzZkPSNmfGxhIgUE7CRUgfP2XnlpMqIkIBrUhLbEafb8lPhj+NehDB+tkFo4WwXPCBPnr4AwuWw2nBa8EAGGlMWIhNxoX8Chd5bkOdeWEklcJ77ZZiXrsXtL/XABQvAtKEqsw1m7oS/UgT1VYAwkiStI0oS9Gqo0cg8MTU3PoQfKHNw0wPsapxShjiMHKMOU7GmjCooY/T1MvF4P0iJulDbkT9nlb07h0wajbY4+XPEa9Ld13D3aHao/8UjyNK9pl1zejvyTgIgRmbRl43m7n/0JsbtNQj5DaLJp47c2oiOt5u53//IGZUfEsIW6Kdsq+A+GvbcqUUqeUtzlhcyv8EuUG7xG/mDSe58yMU9XupbwNZasZ3Y/WPgetZqHsiyzSn7AH34N/gEM+EeTu68/zgAAAABJRU5ErkJggg==") no-repeat left center;
    background-size: 0.85rem 0.85rem;
    padding-left: 1rem;
    float: right;
    font-size: 0.6rem;
}
.click-more {
    font-size: 0.7rem;
    color: #333;
    line-height: 2.5rem;
    height: 2.5rem;
    margin: 0;
    text-align: center;
    background-color: #fff;
}
</style>