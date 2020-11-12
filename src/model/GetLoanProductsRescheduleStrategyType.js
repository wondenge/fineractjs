

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsRescheduleStrategyType model module.
 * @module model/GetLoanProductsRescheduleStrategyType
 * @version 1.0
 */
class GetLoanProductsRescheduleStrategyType {
    /**
     * Constructs a new <code>GetLoanProductsRescheduleStrategyType</code>.
     * @alias module:model/GetLoanProductsRescheduleStrategyType
     */
    constructor() { 
        
        GetLoanProductsRescheduleStrategyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsRescheduleStrategyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsRescheduleStrategyType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsRescheduleStrategyType} The populated <code>GetLoanProductsRescheduleStrategyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsRescheduleStrategyType();

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
GetLoanProductsRescheduleStrategyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsRescheduleStrategyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsRescheduleStrategyType.prototype['description'] = undefined;






export default GetLoanProductsRescheduleStrategyType;

