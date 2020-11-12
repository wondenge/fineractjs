

import ApiClient from '../ApiClient';

/**
 * The GetSavingsInterestCalculationType model module.
 * @module model/GetSavingsInterestCalculationType
 * @version 1.0
 */
class GetSavingsInterestCalculationType {
    /**
     * Constructs a new <code>GetSavingsInterestCalculationType</code>.
     * @alias module:model/GetSavingsInterestCalculationType
     */
    constructor() { 
        
        GetSavingsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSavingsInterestCalculationType} The populated <code>GetSavingsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsInterestCalculationType();

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
GetSavingsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsInterestCalculationType.prototype['description'] = undefined;






export default GetSavingsInterestCalculationType;

