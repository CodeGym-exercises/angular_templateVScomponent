import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'spring', meaning: 'web framework của java'},
    {key: 'rails', meaning: 'web framework của ruby'},
    {key: 'html', meaning: 'ngôn ngữ đánh dấu siêu văn bản'},
    {key: 'firewall', meaning: 'tường lửa'},
    {key: 'javascript', meaning: 'một ngôn ngữ lập trình thông dịch rất phổ biến'},
    {key: 'lavarel', meaning: 'web framework của php'}
  ]
  search(word: string): string {
    if(!word){
      return '';
    }
    const _word = this.words.find(item => item.key===word.toLowerCase());
    if(_word){
      return _word.meaning;
    }
    return 'Not found';
  }
}

export interface IWord{
  key: string;
  meaning: string;
}