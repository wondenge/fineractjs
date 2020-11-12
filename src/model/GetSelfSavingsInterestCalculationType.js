

import ApiClient from '../ApiClient';

/**
 * The GetSelfSavingsInterestCalculationType model module.
 * @module model/GetSelfSavingsInterestCalculationType
 * @version 1.0
 */
class GetSelfSavingsInterestCalculationType {
    /**
     * Constructs a new <code>GetSelfSavingsInterestCalculationType</code>.
     * @alias module:model/GetSelfSavingsInterestCalculationType
     */
    constructor() { 
        
        GetSelfSavingsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSelfSavingsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSelfSavingsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetSelfSavingsInterestCalculationType} The populated <code>GetSelfSavingsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSelfSavingsInterestCalculationType();

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
GetSelfSavingsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSelfSavingsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSelfSavingsInterestCalculationType.prototype['description'] = undefined;






export default GetSelfSavingsInterestCalculationType;

