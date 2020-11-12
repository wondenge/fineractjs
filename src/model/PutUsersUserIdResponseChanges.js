

import ApiClient from '../ApiClient';

/**
 * The PutUsersUserIdResponseChanges model module.
 * @module model/PutUsersUserIdResponseChanges
 * @version 1.0
 */
class PutUsersUserIdResponseChanges {
    /**
     * Constructs a new <code>PutUsersUserIdResponseChanges</code>.
     * @alias module:model/PutUsersUserIdResponseChanges
     */
    constructor() { 
        
        PutUsersUserIdResponseChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutUsersUserIdResponseChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutUsersUserIdResponseChanges} obj Optional instance to populate.
     * @return {module:model/PutUsersUserIdResponseChanges} The populated <code>PutUsersUserIdResponseChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutUsersUserIdResponseChanges();

            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('passwordEncoded')) {
                obj['passwordEncoded'] = ApiClient.convertToType(data['passwordEncoded'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstname
 */
PutUsersUserIdResponseChanges.prototype['firstname'] = undefined;

/**
 * @member {String} passwordEncoded
 */
PutUsersUserIdResponseChanges.prototype['passwordEncoded'] = undefined;






export default PutUsersUserIdResponseChanges;

