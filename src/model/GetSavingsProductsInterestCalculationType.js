

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsInterestCalculationType model module.
 * @module model/GetSavingsProductsInterestCalculationType
 * @version 1.0
 */
class GetSavingsProductsInterestCalculationType {
    /**
     * Constructs a new <code>GetSavingsProductsInterestCalculationType</code>.
     * @alias module:model/GetSavingsProductsInterestCalculationType
     */
    constructor() { 
        
        GetSavingsProductsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsInterestCalculationType} The populated <code>GetSavingsProductsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsInterestCalculationType();

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
GetSavingsProductsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsInterestCalculationType.prototype['description'] = undefined;






export default GetSavingsProductsInterestCalculationType;

