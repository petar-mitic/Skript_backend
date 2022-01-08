export const checkEnrty = async (brand, model, year, range,price, res) => {
    if(brand == "" ||
        model == "" ||
        year == "" ||
        range == "" ||
        price == ""){
        res.status(400).json({message: "Parametar nedostaje"});
        return false;
    }
    if (!(typeof brand === "string" || brand instanceof String)) {
        res.status(400).json({ message: "Brand mora biti string" });
        return false;
    }
    if (!(typeof model === "string" || model instanceof String)) {
        res.status(400).json({ message: "Model mora biti string" });
        return false;
    }
    if(! Number.isInteger(year)){
        res.status(400).json({message: "Godina mora biti broj"});
        return false;
    }
    if(! Number.isInteger(range)){
        res.status(400).json({message: "Kilometraza mora biti broj"});
        return false;
    }
    if(! Number.isInteger(price)){
        res.status(400).json({message: "Cena mora biti broj"});
        return false;
    }
    return true;
}