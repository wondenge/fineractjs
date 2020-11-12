

import ApiClient from '../ApiClient';

/**
 * The GetSavingsInterestPostingPeriodType model module.
 * @module model/GetSavingsInterestPostingPeriodType
 * @version 1.0
 */
class GetSavingsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetSavingsInterestPostingPeriodType</code>.
     * @alias module:model/GetSavingsInterestPostingPeriodType
     */
    constructor() { 
        
        GetSavingsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetSavingsInterestPostingPeriodType} The populated <code>GetSavingsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsInterestPostingPeriodType();

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
GetSavingsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetSavingsInterestPostingPeriodType;

