

import ApiClient from '../ApiClient';

/**
 * The GetSavingsInterestCalculationDaysInYearType model module.
 * @module model/GetSavingsInterestCalculationDaysInYearType
 * @version 1.0
 */
class GetSavingsInterestCalculationDaysInYearType {
    /**
     * Constructs a new <code>GetSavingsInterestCalculationDaysInYearType</code>.
     * @alias module:model/GetSavingsInterestCalculationDaysInYearType
     */
    constructor() { 
        
        GetSavingsInterestCalculationDaysInYearType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsInterestCalculationDaysInYearType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsInterestCalculationDaysInYearType} obj Optional instance to populate.
     * @return {module:model/GetSavingsInterestCalculationDaysInYearType} The populated <code>GetSavingsInterestCalculationDaysInYearType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsInterestCalculationDaysInYearType();

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
GetSavingsInterestCalculationDaysInYearType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsInterestCalculationDaysInYearType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsInterestCalculationDaysInYearType.prototype['description'] = undefined;






export default GetSavingsInterestCalculationDaysInYearType;

