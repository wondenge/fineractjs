

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsInterestPostingPeriodType model module.
 * @module model/GetSavingsProductsInterestPostingPeriodType
 * @version 1.0
 */
class GetSavingsProductsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetSavingsProductsInterestPostingPeriodType</code>.
     * @alias module:model/GetSavingsProductsInterestPostingPeriodType
     */
    constructor() { 
        
        GetSavingsProductsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsInterestPostingPeriodType} The populated <code>GetSavingsProductsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsInterestPostingPeriodType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetSavingsProductsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetSavingsProductsInterestPostingPeriodType;

