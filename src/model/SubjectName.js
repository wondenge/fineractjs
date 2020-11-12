

import ApiClient from '../ApiClient';

/**
 * The SubjectName model module.
 * @module model/SubjectName
 * @version 1.0
 */
class SubjectName {
    /**
     * Constructs a new <code>SubjectName</code>.
     * @alias module:model/SubjectName
     */
    constructor() { 
        
        SubjectName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubjectName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubjectName} obj Optional instance to populate.
     * @return {module:model/SubjectName} The populated <code>SubjectName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubjectName();

            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} firstName
 */
SubjectName.prototype['firstName'] = undefined;

/**
 * @member {String} middleName
 */
SubjectName.prototype['middleName'] = undefined;

/**
 * @member {String} lastName
 */
SubjectName.prototype['lastName'] = undefined;

/**
 * @member {String} displayName
 */
SubjectName.prototype['displayName'] = undefined;






export default SubjectName;

