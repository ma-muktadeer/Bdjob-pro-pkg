export interface PricingPlanInterface {
    title: string;
    price: string;
    originalPrice?: string;
    savings?: string;
    badge?: string;
    buttonText: string;
    features: {
        label: string;
        value: string | number | boolean;
        isNew?: boolean;
    }[];
}
