

export class ArrayRandomValues {

    private basicArray : Array<Object>;
    private limitArrayResult : Number;
    private arrayResult: Array<Object>;
    private randomNumber : Number;

    // Seta o array básico que vamos pegar os valores aleatórios
    public setBasicArray(array: Array<Object>) {
        this.basicArray = array;
    }

    // Quantos valores aleatórios vamos ter como saida?
    public setLimitArrayResult(size: Number) {
        this.limitArrayResult = size;
    }

    public getBasicArray() {
        return this.basicArray;
    }
    
    public getLimitArrayResult() {
        return this.limitArrayResult;
    }
    
    public getRandomNumber() {
       return this.randomNumber = Math.floor(Math.random() * this.basicArray.length);
    }

    private generateArrayResult() {
        while(this.arrayResult.length < Number(this.limitArrayResult)) {
            const number = this.getRandomNumber();

            if(!this.arrayResult.includes(this.basicArray[number])) {
                this.arrayResult.push(this.basicArray[number]);
            }
        }

        return this.arrayResult;
    }

}