export const test = () => {
    return {
        type: 'TEST',
        data: {
            saveIt: 'This is just a dummy string I am passing to it'
        }
    }
}

export const query = (data) => {
    return {
        type: 'SEARCH',
        data,
    }
}
export const showLoader = () => {
    return {type: 'SHOW_LOADER'}
}


export const hideLoader = () => {
    return {type: 'HIDE_LOADER'}
}

let obj = {
    name: 'French Toast with Honey',
    keywords: {
        chicken: true,
        rice: true,
        eggs: true,
        onion: true
    },
    ingrd: "<ul><li>Chicken into pieces 1 kgs</li>" +
        "<li>Rice 1 kg</li>" +
        "<li>Onion 6 nos</li>" +
        "<li>Tomatoes chopped 3 big sized</li>" +
        "<li>Ginger garlic paste 4 tsp</li>" +
        "<li>Biryani masala 2 tbsp</li>" +
        "<li>Garam masala powder 1 tsp</li>" +
        "<li>Green chillies pieces into slice 8-10 nos</li>" +
        "<li>Kesar few threads soaked into hot milk with one tsp sugar</li>" +
        "<li>Kewra essence( mix in kesar n milk mixture) 2-4 drop</li>" +
        "<li>Whole garam masala-green black cardamom, black cumin or shahi Zeera, cloves, cinnamon sticks, star anise, bay leaves, black pepper 1/2 tsp</li>" +
        "<li>Fried onion 1/2 cup</li>" +
        // "<li>1 small cardamom</li>" +
        "<li>2-3 cloves</li>" +
        "<li>1 tsp cumin seeds</li>" +
        "<li>1 tsp red chilli powder</li>" +
        "<li>3 medium sized chopped onions and tomatoes</li>" +
        "<li>1 1/2 tbsp ginger garlic paste</li>" +
        "<li>1/2 tsp turmeric powder</li>" +
        "<li>1 tsp red chilli powder</li>" +
        "<li>1 tsp coriander powder and Garam Masala</li>" +
        "<li>1/2 tsp salt</li>" +
        "<li>1 cup water</li></ul>",
    instruction: "<ul><li>1. Make ghee or oil hot and fry the onion until golden brown, add chicken and fry for few minutes on high flame</li>" +
        "<li>2. Add ginger garlic paste n fry few minutes, add biryani masala, Kashmiri red chilli powder, salt and fry for 2 minutes. Add some water and cook on low flame until the chicken is tender.</li>" +
        "<li>3. Add yogurt, garam masala powder n nutmeg n mace powder. Then increase heat and stir fry until oil separates from the gravy.</li>" +
        "<li>4. Add tomatoes n cook few minutes ( don't mash or cooked tomatoes)</li>" +
        "<li>5. Separately_ In 24 glass of hot water add 6 tbsp salt, lemon juice, whole garam masala some oil and soaked rice. Boil until the rice is more than half cooked or 80% cooked. Removed from heat and thoroughly drain the water.</li>" +
        "<li>6. In a pot spread 2tsp ghee and then spread the boiled rice, after that spread the cooked chicken on the rice, then spread coriander leaves, mint leaves, green chillies and kesar or kewra essence milk</li>" +
        "<li>7. Make one or two layers of rice and chicken. Set the pot on a tawa. Cover n cook on low flame untill the rice is completely tender. Mix before serving. </li>" +
        "<li>8. Serving suggestions–Garnish with fried onion or boiled egg.</li>" +
        "<li>Served with raita n salad</li>" +
        // "<li>Now take fondant and add green pink and black colour in small portions</li>" +
        "<li>Add little water and cook gravy and masala till it looses oil again.</li>" +
        "<li>Cook it for 5-8 minutes and then add paneer eggs and serve hot with rice or puris...</li>" +
        "<li>Enjoy endlessly...</li></ul>",
    serve: 5,
    pre_time: "30 min",
    cook_time: "30 min",
    total_time: "60 min",
}
