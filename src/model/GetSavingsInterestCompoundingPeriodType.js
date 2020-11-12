

import ApiClient from '../ApiClient';

/**
 * The GetSavingsInterestCompoundingPeriodType model module.
 * @module model/GetSavingsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetSavingsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetSavingsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetSavingsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetSavingsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetSavingsInterestCompoundingPeriodType} The populated <code>GetSavingsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsInterestCompoundingPeriodType();

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
GetSavingsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetSavingsInterestCompoundingPeriodType;

