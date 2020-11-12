

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsInterestCalculationDaysInYearType model module.
 * @module model/GetSelfSavingsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetSelfSavingsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetSelfSavingsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetSelfSavingsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetSelfSavingsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsInterestCalculationDaysInYearType} The populated <code>GetSelfSavingsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsInterestCalculationDaysInYearType();

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
GetSelfSavingsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetSelfSavingsInterestCalculationDaysInYearType;

