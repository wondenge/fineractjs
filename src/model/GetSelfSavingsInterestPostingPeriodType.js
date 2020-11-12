

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsInterestPostingPeriodType model module.
 * @module model/GetSelfSavingsInterestPostingPeriodType
 * @version 1.0
 */
class GetSelfSavingsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetSelfSavingsInterestPostingPeriodType</code>.
     * @alias module:model/GetSelfSavingsInterestPostingPeriodType
     */
    constructor() { 
        
        GetSelfSavingsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsInterestPostingPeriodType} The populated <code>GetSelfSavingsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsInterestPostingPeriodType();

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
GetSelfSavingsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetSelfSavingsInterestPostingPeriodType;

