

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsLockinPeriodFrequencyTypeOptions model module.
 * @module model/GetSavingsProductsLockinPeriodFrequencyTypeOptions
 * @version 1.0
 */
class GetSavingsProductsLockinPeriodFrequencyTypeOptions {
    /**
     * Constructs a new <code>GetSavingsProductsLockinPeriodFrequencyTypeOptions</code>.
     * @alias module:model/GetSavingsProductsLockinPeriodFrequencyTypeOptions
     */
    constructor() { 
        
        GetSavingsProductsLockinPeriodFrequencyTypeOptions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsLockinPeriodFrequencyTypeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsLockinPeriodFrequencyTypeOptions} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsLockinPeriodFrequencyTypeOptions} The populated <code>GetSavingsProductsLockinPeriodFrequencyTypeOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsLockinPeriodFrequencyTypeOptions();

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
GetSavingsProductsLockinPeriodFrequencyTypeOptions.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsLockinPeriodFrequencyTypeOptions.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsLockinPeriodFrequencyTypeOptions.prototype['description'] = undefined;






export default GetSavingsProductsLockinPeriodFrequencyTypeOptions;

