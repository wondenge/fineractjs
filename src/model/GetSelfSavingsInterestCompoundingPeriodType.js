

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsInterestCompoundingPeriodType model module.
 * @module model/GetSelfSavingsInterestCompoundingPeriodType
 * @version 1.0
 */
class GetSelfSavingsInterestCompoundingPeriodType {
    /**
     * Constructs a new <code>GetSelfSavingsInterestCompoundingPeriodType</code>.
     * @alias module:model/GetSelfSavingsInterestCompoundingPeriodType
     */
    constructor() { 
        
        GetSelfSavingsInterestCompoundingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsInterestCompoundingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsInterestCompoundingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsInterestCompoundingPeriodType} The populated <code>GetSelfSavingsInterestCompoundingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsInterestCompoundingPeriodType();

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
GetSelfSavingsInterestCompoundingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsInterestCompoundingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsInterestCompoundingPeriodType.prototype['description'] = undefined;






export default GetSelfSavingsInterestCompoundingPeriodType;

