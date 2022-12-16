class Utilities {

    async sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async typeInElement(mobileElement, text) {
        await mobileElement.replaceText(text);
        await mobileElement.tapReturnKey();
    }

    async scrollToElement(targetElement, background, pixels, direction) {
        if (direction === 'left' || direction === 'right') {
            await this.scrollHorizontallyToElement(element(background), direction, targetElement);
        } else {
            await waitFor(targetElement)
            .toBeVisible()
            .whileElement(background)
            .scroll(pixels, direction);
        }
    }

    async scrollHorizontallyToElement(background, direction, targetElement) {
        while(await this.softElementAssertion(targetElement) === false) {
            const scrollDirection = direction === 'left' ? 'right' : 'left';
            await background.swipe(scrollDirection, 'slow', 0.5);
        }
    }

    async softElementAssertion(mobileElement) {
        try {
            await expect(mobileElement).toBeVisible();
            return true;
        } catch {
            return false;
        }
    }
}

export default new Utilities();
