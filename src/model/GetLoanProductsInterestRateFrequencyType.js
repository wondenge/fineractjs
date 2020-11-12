

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsInterestRateFrequencyType model module.
 * @module model/GetLoanProductsInterestRateFrequencyType
 * @version 1.0
 */
class GetLoanProductsInterestRateFrequencyType {
    /**
     * Constructs a new <code>GetLoanProductsInterestRateFrequencyType</code>.
     * @alias module:model/GetLoanProductsInterestRateFrequencyType
     */
    constructor() { 
        
        GetLoanProductsInterestRateFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsInterestRateFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsInterestRateFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsInterestRateFrequencyType} The populated <code>GetLoanProductsInterestRateFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsInterestRateFrequencyType();

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
GetLoanProductsInterestRateFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsInterestRateFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsInterestRateFrequencyType.prototype['description'] = undefined;






export default GetLoanProductsInterestRateFrequencyType;

