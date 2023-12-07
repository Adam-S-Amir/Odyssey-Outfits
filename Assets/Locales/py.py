from yandex_translate import YandexTranslate
translate = YandexTranslate('trnsl.1.1.20130705T052930Z.27fcc82ff0c243be.c0e2f80d06217633cd117ad29131aff078a05530')
print('Languages:', translate.langs)
print('Translate directions:', translate.directions)
print('Detect language:', translate.detect('Привет, мир!'))
print('Translate:', translate.translate('Привет, мир!', 'ru-en'))  # or just 'en'